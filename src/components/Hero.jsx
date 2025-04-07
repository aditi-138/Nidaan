// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero.png';

export default function Hero() {
  return (
    <section className="bg-light py-5">
      <div className="container d-flex flex-column-reverse flex-lg-row align-items-center">
        <div className="text-center text-lg-start col-lg-6">
          <h1 className="display-5 fw-bold">Nidaan</h1>
          <p className="lead text-muted">AI-powered detection system for quick and accurate diagnosis</p>
          <Link to="/predict" className="btn btn-primary btn-lg mt-3">Start Diagnosis</Link>
        </div>
        <div className="col-lg-6 text-center">
          <img src={heroImage} className="img-fluid" alt="Hero visual" />
        </div>
      </div>
    </section>
  );
}
