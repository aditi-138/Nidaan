import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ChatBot from "./ChatBot";

const Layout = ({ children }) => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(prev => !prev);
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "20px", marginTop: "56px" }}>
          {children}
        </div>
      </div>

      {/* Floating Chatbot Icon */}
      <div
        className="chatbot-toggle-btn"
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 999
        }}
      >
        💬
      </div>

      {chatOpen && <ChatBot />}
      <Footer />
    </>
  );
};

export default Layout;
