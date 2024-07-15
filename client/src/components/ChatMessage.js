// src/components/ChatMessage.js
import React from 'react';
import { motion } from 'framer-motion';

function ChatMessage({ text, type }) {
  const isUser = type === 'user';
  const messageStyle = isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800';
  const alignment = isUser ? 'self-end' : 'self-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-lg my-2 max-w-xs ${messageStyle} ${alignment}`}
    >
      {text}
    </motion.div>
  );
}

export default ChatMessage;
