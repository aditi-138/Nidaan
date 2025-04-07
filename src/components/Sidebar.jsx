// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Login', path: '/login' },
    { name: 'Diagnosis', path: '/diagnosis' },
    { name: 'Disease Models', path: '/diseasemodels' },
    { name: 'Inbox', path: '/inbox' },
    { name: 'Feed', path: '/feed' },
    { name: 'Map', path: '/map' }, // ✅ Map route still included
  ];

  return (
    <div
      style={{
        width: '250px',
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '2rem 1rem',
        height: '100vh',
        position: 'sticky',
        top: 0,
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
      }}
      className="d-flex flex-column justify-content-between"
    >
      <div>
        <h4 className="mb-4">Nidaan</h4>
        <ul className="list-unstyled">
          {navItems.map((item, index) => (
            <li key={index} className="mb-3">
              <Link
                to={item.path}
                className={`text-decoration-none ${
                  location.pathname === item.path ? 'fw-bold text-primary' : 'text-black'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <small>&copy; 2025 Nidaan</small>
      </div>
    </div>
  );
};

export default Sidebar;
