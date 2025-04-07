// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ChatBot.css'; // You can create styles here

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = async () => {
    if (!userMsg.trim()) return;

    const newMessages = [...messages, { from: 'user', text: userMsg }];
    setMessages(newMessages);
    setUserMsg('');

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await response.json();
      setMessages([...newMessages, { from: 'bot', text: data.reply }]);
    } catch (err) {
      console.error('Chatbot Error:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="chatbot-container"
    >
      <div className="chatbot-header">💬 Ask Nidaan</div>
      <div className="chatbot-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-footer">
        <input
          type="text"
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          placeholder="Ask me about the portal..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </motion.div>
  );
};

export default ChatBot;
