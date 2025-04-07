import React from "react";
import Sidebar from "../components/Sidebar";

export default function DocFeed() {
  return (
    <div className="d-flex" style={{
      backgroundImage: 'url("/images/background.jpeg")', // Replace with actual image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-4">
        <h2 className="mb-4 text-black">Doctor Feed</h2>

        {/* Feed content */}
        <div className="row g-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="col-md-6 col-lg-4">
              <div className="card shadow-sm h-100" style={{ backgroundColor: "white", color: "black" }}>
                <div className="card-body">
                  <h5 className="card-title">Case #{item}</h5>
                  <p className="card-text">
                    Patient reported symptoms such as fatigue, headache, and high fever.
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Button */}
        <div className="text-center mt-4">
          <button className="btn btn-success">Add New Case</button>
        </div>
      </div>
    </div>
  );
}
