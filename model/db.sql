CREATE DATABASE chatbot;

USE chatbot;

CREATE TABLE chat_sessions (
    session_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    chat_history JSON,
    chat_summary TEXT
);

select * from chat_sessions;