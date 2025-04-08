import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PeopleFill, Calendar2, Inbox } from "react-bootstrap-icons";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function DocHome() {
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const fetchDoctor = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "doctors", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setDoctorName(userSnap.data().name);
        }
      }
    };

    fetchDoctor();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center text-primary">Welcome, Dr. {doctorName || "Krishna"}</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center shadow-sm bg-info-subtle text-black">
            <Card.Body>
              <PeopleFill size={30} className="mb-2 text-info" />
              <Card.Title>View Patients</Card.Title>
              <Button variant="info" href="/docpatient">Go</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm bg-info-subtle text-black">
            <Card.Body>
              <Calendar2 size={30} className="mb-2 text-success" />
              <Card.Title>Calendar</Card.Title>
              <Button variant="success" href="/calendar">Go</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm bg-info-subtle text-black">
            <Card.Body>
              <Inbox size={30} className="mb-2 text-warning" />
              <Card.Title>Inbox</Card.Title>
              <Button variant="warning" href="/inbox">Go</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
