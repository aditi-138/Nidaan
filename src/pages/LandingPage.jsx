import React from 'react';
import { Link } from 'react-router-dom';
import TypingText from '../components/TypingText'; // Adjust path if needed

const LandingPage = () => {
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: 'url(/images/background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="row w-100" style={{ backgroundColor: '#ffffffcc' }}>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-5">
          {/* Stethoscope Icon */}
          <img
            src="/images/stethoscope.png"
            alt="Stethoscope Icon"
            style={{ width: '50px', height: '50px', marginBottom: '20px' }}
          />

          {/* Typing animation */}
          <TypingText />

          <p className="lead text-muted mb-4">
            Your trusted platform for secure and seamless medical communication.
          </p>

          <div>
            <Link to="/signup" className="btn btn-primary me-3">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline-secondary">
              Login
            </Link>
          </div>
        </div>

        <div className="col-md-6 d-none d-md-block">
          <img
            src="/images/doctor-illustration.png"
            alt="Doctor Illustration"
            className="img-fluid"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
