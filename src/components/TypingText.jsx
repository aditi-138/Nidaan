// TypingText.jsx
import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingText = () => {
  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: ["Nidaan.", "निदान", "নির্ধারণ", "નિદાન", "தீர்வு"],
      loop: true,
      typeSpeed: 70,
      backSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="d-flex justify-content-center mt-4">
      <h1 className="typing-text display-4 fw-bold text-primary"></h1>
    </div>
  );
};

export default TypingText;
