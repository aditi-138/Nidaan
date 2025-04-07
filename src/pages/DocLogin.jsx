import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // ✅ Correct import

const DocLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/dochome');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex vh-100">
      <Sidebar /> {/* ✅ Sidebar is shown on the left */}

      <div
        className="d-flex align-items-center justify-content-center flex-grow-1 text-black"
        style={{
          backgroundImage: 'url(/images/background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container p-4 border rounded shadow" style={{ maxWidth: "400px", backgroundColor: "#ffffffcc" }}>
          <h2 className="text-center mb-3">{isRegistering ? 'Register' : 'Login'} to Nidaan</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleAuth}>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                className="form-control bg-white text-black"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                className="form-control bg-white text-black"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              {isRegistering ? 'Register' : 'Login'}
            </button>
            <div className="text-center mt-2">
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocLogin;
