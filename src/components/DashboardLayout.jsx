import React from "react";
import Sidebar from "./Sidebar";
import Chatbot from "./Chatbot";

export default function DashboardLayout({ children }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div
        className="flex-grow-1 p-4 position-relative"
        style={{
          backgroundImage: 'url("/images/your-background.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "black",
        }}
      >
        {children}

        {/* Chatbot (bottom-right corner) */}
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
