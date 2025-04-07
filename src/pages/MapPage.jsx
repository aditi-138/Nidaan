import React from "react";

const MapPage = () => {
  return (
    <div style={{ padding: "2rem", color: "black" }}>
      <h2 style={{ color: "black" }}>Nearby Hospitals</h2>
      <p style={{ color: "black" }}>
        The map below shows hospitals around your current region:
      </p>

      <div
        style={{
          marginTop: "1rem",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          title="Hospitals Nearby"
          src="https://www.google.com/maps?q=hospitals+near+me&output=embed"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;
