import React, { useEffect, useRef, useState } from 'react';

const Inbox = () => {
  const messagesRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'received', text: 'Can be verified on any platform using docker' },
    { type: 'sent', text: 'Your error message says permission denied, npm global installs must be given root privileges.' },
  ]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { type: 'sent', text: newMessage.trim() }]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const themeClass = darkMode ? 'bg-dark text-white' : 'bg-white text-dark';
  const bubbleReceived = darkMode ? 'bg-secondary text-white' : 'bg-light';
  const bubbleSent = darkMode ? 'bg-primary text-white' : 'bg-primary text-white';

  return (
    <div className={`container-fluid vh-100 ${themeClass}`}>
      <div className="row h-100">
        {/* Sidebar */}
        <div className={`col-md-2 border-end p-3 ${darkMode ? 'bg-black text-white' : 'bg-light text-dark'}`}>
          <h5>Inbox</h5>
          <button className="btn btn-outline-info btn-sm mt-3" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Chat Section */}
        <div className="col-md-10 d-flex flex-column p-0">
          {/* Top Bar */}
          <div className={`d-flex justify-content-between align-items-center border-bottom p-3 ${themeClass}`}>
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb"
                  className="rounded-circle"
                  width="40"
                  height="40"
                  alt="Avatar"
                />
                <span
                  className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-white"
                  style={{ width: '12px', height: '12px' }}
                ></span>
              </div>
              <div>
                <h6 className="mb-0">Anderson Vanhron</h6>
                <small className="text-muted">Junior Developer</small>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-search"></i></button>
              <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-heart"></i></button>
              <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-bell"></i></button>
            </div>
          </div>

          {/* Messages */}
          <div className={`flex-grow-1 overflow-auto p-3 ${themeClass}`} ref={messagesRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex align-items-end mb-3 ${msg.type === 'sent' ? 'justify-content-end' : ''}`}
              >
                {msg.type === 'received' && (
                  <img
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb"
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                    alt="Avatar"
                  />
                )}
                <div
                  className={`p-2 rounded shadow-sm ${msg.type === 'sent' ? bubbleSent : bubbleReceived} ${
                    msg.type === 'sent' ? 'me-2' : ''
                  }`}
                  style={{ maxWidth: '75%' }}
                >
                  {msg.text}
                </div>
                {msg.type === 'sent' && (
                  <img
                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b"
                    className="rounded-circle"
                    width="40"
                    height="40"
                    alt="Avatar"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className={`border-top p-3 ${themeClass}`}>
            <div className="input-group">
              <input
                type="text"
                className={`form-control ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button className="btn btn-primary" onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
