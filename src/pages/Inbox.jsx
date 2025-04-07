import React, { useEffect, useRef, useState } from 'react';

const Inbox = () => {
  const messagesRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-search"></i>
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-heart"></i>
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-bell"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className={`flex-grow-1 overflow-auto p-3 ${themeClass}`} ref={messagesRef}>
            {/* Received Message */}
            <div className="d-flex align-items-end mb-3">
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb"
                className="rounded-circle me-2"
                width="40"
                height="40"
                alt="Avatar"
              />
              <div className={`p-2 rounded shadow-sm ${bubbleReceived}`}>
                Can be verified on any platform using docker
              </div>
            </div>

            {/* Sent Message */}
            <div className="d-flex align-items-end justify-content-end mb-3">
              <div className={`p-2 rounded shadow-sm me-2 ${bubbleSent}`} style={{ maxWidth: '75%' }}>
                Your error message says permission denied, npm global installs must be given root privileges.
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b"
                className="rounded-circle"
                width="40"
                height="40"
                alt="Avatar"
              />
            </div>

            {/* Multiple received messages */}
            <div className="d-flex align-items-start mb-3">
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb"
                className="rounded-circle me-2"
                width="40"
                height="40"
                alt="Avatar"
              />
              <div className="d-flex flex-column gap-2">
                <div className={`p-2 rounded shadow-sm ${bubbleReceived}`}>
                  Command was run with root privileges. I'm sure about that.
                </div>
                <div className={`p-2 rounded shadow-sm ${bubbleReceived}`}>
                  I've updated the description so it's more obvious now.
                </div>
                <div className={`p-2 rounded shadow-sm ${bubbleReceived}`}>
                  FYI https://askubuntu.com/a/700266/510172
                </div>
                <div className={`p-2 rounded shadow-sm ${bubbleReceived}`}>
                  Check the line above (it ends with a # so, I'm running it as root) <br />
                  <code className="bg-dark text-white p-1 d-block rounded mt-1"># npm install -g @vue/devtools</code>
                </div>
              </div>
            </div>

            {/* Sent message */}
            <div className="d-flex align-items-end justify-content-end mb-3">
              <div className={`p-2 rounded shadow-sm me-2 ${bubbleSent}`} style={{ maxWidth: '75%' }}>
                Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b"
                className="rounded-circle"
                width="40"
                height="40"
                alt="Avatar"
              />
            </div>

            {/* Final exchange */}
            <div className="d-flex align-items-end mb-3">
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb"
                className="rounded-circle me-2"
                width="40"
                height="40"
                alt="Avatar"
              />
              <div className={`p-2 rounded shadow-sm ${bubbleReceived}`}>
                Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)
              </div>
            </div>

            <div className="d-flex align-items-end justify-content-end mb-3">
              <div className={`p-2 rounded shadow-sm me-2 ${bubbleSent}`} style={{ maxWidth: '75%' }}>
                Are you using sudo?
              </div>
              <img
                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b"
                className="rounded-circle"
                width="40"
                height="40"
                alt="Avatar"
              />
            </div>
          </div>

          {/* Chat Input */}
          <div className={`border-top p-3 ${themeClass}`}>
            <div className="input-group">
              <input
                type="text"
                className={`form-control ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}
                placeholder="Type a message..."
              />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
