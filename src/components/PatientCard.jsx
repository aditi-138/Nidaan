import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

export default function PatientCard() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'feedback'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPatientsData(data);
      } catch (error) {
        console.error("Error fetching patients data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleReadMoreClick = (patient) => {
    setSelectedPatient(patient);
    setShowDetail(true);
  };

  const handleCloseClick = () => {
    setShowDetail(false);
  };

  return (
    <div
      className="container-fluid min-vh-100 py-5"
      style={{
        backgroundImage: 'url("/images/your-background.jpg")', // replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="row g-4">
          {patientsData.map((patient) => (
            <div key={patient.id} className="col-md-4">
              <div
                className="card text-center h-100 shadow"
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <div className="card-body">
                  <img
                    src="/images/patient.png"
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h5 className="card-title">{patient.name}</h5>
                  <p className="text-muted">Patient</p>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-primary btn-sm" onClick={() => handleReadMoreClick(patient)}>
                      Show Profile
                    </button>
                    <a href="#" className="btn btn-outline-secondary btn-sm">
                      Edit Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Profile Detail */}
        {showDetail && selectedPatient && (
          <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content" style={{ backgroundColor: 'white', color: 'black' }}>
                <div className="modal-header">
                  <h5 className="modal-title">Patient Details</h5>
                  <button type="button" className="btn-close" onClick={handleCloseClick}></button>
                </div>
                <div className="modal-body">
                  <p><strong>Name:</strong> {selectedPatient.name}</p>
                  <p><strong>Designation:</strong> {selectedPatient.designation}</p>
                  <p><strong>ID No.:</strong> {selectedPatient.idno}</p>
                  <p><strong>Category:</strong> {selectedPatient.category}</p>
                  <p><strong>Status:</strong> {selectedPatient.status}</p>
                  <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                  <p><strong>Email:</strong> {selectedPatient.email}</p>
                  <p><strong>Description:</strong> {selectedPatient.description}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={handleCloseClick}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
