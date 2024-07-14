from langchain_openai import OpenAIEmbeddings
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from langchain_pinecone import PineconeVectorStore
from langchain_core.messages import HumanMessage, AIMessage
import streamlit as st
from dotenv import load_dotenv
import os
import time

from chain import create_chain
from ChatStoreSQL import save_chat_history, load_chat_history
from ChatSummarizer import summarize_chat_history

load_dotenv()
os.environ["LANGCHAIN_TRACING_V2"]="true"
os.environ["LANGCHAIN_API_KEY"]=os.getenv("LANGCHAIN_API_KEY")


def process_chat(chain, question, chat_history, chat_summary):
    response = chain.invoke({
        "input": question,
        "chat_history": chat_history,
        "chat_summary": chat_summary
    })
    return response["answer"]


# Streamlit UI code
if __name__ == '__main__':
    st.title('Chatbot Demo')
    
    vectorStore = PineconeVectorStore(
        index_name=os.getenv("PINECONE_INDEX"),
        embedding=HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")
    )

    chain = create_chain(vectorStore)

    st.session_state.session_id = "abc1"
    st.session_state.user_id = "user123"
    
    st.session_state.chat_history, st.session_state.chat_summary = load_chat_history(st.session_state.session_id)
    if st.session_state.chat_history is None:
        st.session_state.chat_history = []
    if st.session_state.chat_summary is None:
        st.session_state.chat_summary = ""

    input_text = st.text_input("Message Chatbot")

    if input_text:
        start=time.process_time()
        chat_history = st.session_state.chat_history[-10:]
        chat_summary = st.session_state.chat_summary
        response = process_chat(chain, input_text, chat_history, chat_summary)
        st.write(response)
        st.write("Response time :",time.process_time()-start)

        st.session_state.chat_history.append(HumanMessage(content=input_text))
        st.session_state.chat_history.append(AIMessage(content=response))

        chat_history = st.session_state.chat_history[-10:]
        new_chat_summary = summarize_chat_history(chat_summary, chat_history)
        save_chat_history(st.session_state.session_id, st.session_state.user_id, st.session_state.chat_history, new_chat_summary)
        st.markdown("---")

    if st.session_state.chat_history:
        st.subheader("Chat History")
        for msg in st.session_state.chat_history:
            if msg.type == "human":
                st.markdown(f"**User:** {msg.content}")
            elif msg.type == "ai":
                st.markdown(f"**Chatbot Response:** {msg.content}")
                st.markdown("---")