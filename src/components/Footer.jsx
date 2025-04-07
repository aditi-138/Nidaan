// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Nidaan</p>
        <p className="small">Empowering early detection through AI</p>
      </div>
    </footer>
  );
}
