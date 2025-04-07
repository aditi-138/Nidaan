import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"; // Ensure the config file exists and is correctly set up

export default function DocPatient() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "patients"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-4">
        <h2 className="mb-4">Patient List</h2>

        <div className="row g-4">
          {patients.length > 0 ? (
            patients.map((patient) => (
              <div key={patient.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{patient.name}</h5>
                    <p className="card-text">
                      <strong>Age:</strong> {patient.age}<br />
                      <strong>Symptoms:</strong> {patient.symptoms}
                    </p>
                    <a href={`/predict/${patient.id}`} className="btn btn-outline-primary btn-sm">
                      Predict Disease
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No patient data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
