// src/pages/DocLogin.jsx

import React, { useState } from 'react';
import { auth, googleProvider, db } from '../firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import Sidebar from '../components/Sidebar';

const DocLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Handle Email/Password Auth
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

  // ✅ Handle Google Login + Save to Firestore
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user exists in Firestore
      const userRef = doc(db, "doctors", user.uid);
      const userSnap = await getDoc(userRef);

      // If not exists, create new doctor entry
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date()
        });
      }

      navigate('/dochome');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex vh-100">
      <Sidebar />

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
          </form>

          {/* ✅ Google Sign In Button */}
          <div className="text-center mt-3">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline-dark w-100"
            >
              <img src="/images/googleicon.png" alt="Google" style={{ width: "20px", marginRight: "8px" }} />
              Sign in with Google
            </button>
          </div>

          <div className="text-center mt-2">
            <button
              type="button"
              className="btn btn-link text-decoration-none"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocLogin;
