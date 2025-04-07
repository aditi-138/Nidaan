import React from "react";
import Sidebar from "../components/Sidebar";

export default function DocProfile() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container p-4">
        <div className="row g-4 align-items-center">
          {/* Profile Image */}
          <div className="col-md-4 text-center">
            <img
              src={doctorImg}
              alt="Doctor"
              className="img-fluid rounded-circle shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Profile Info */}
          <div className="col-md-8">
            <h3>Dr. Aditi Sharma</h3>
            <p className="text-muted">MBBS, MD - General Medicine</p>

            <div className="mt-3">
              <p><strong>Email:</strong> aditi.sharma@hospital.com</p>
              <p><strong>Specialization:</strong> Internal Medicine</p>
              <p><strong>Experience:</strong> 8 years</p>
              <p><strong>Location:</strong> Mumbai, India</p>
            </div>

            <button className="btn btn-primary mt-2">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
