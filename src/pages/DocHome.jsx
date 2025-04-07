// src/pages/DocHome.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PeopleFill, Calendar2, Inbox } from "react-bootstrap-icons";

export default function DocHome() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center text-primary">Welcome, Doctor</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <PeopleFill size={30} className="mb-2 text-info" />
              <Card.Title>View Patients</Card.Title>
              <Button variant="info" href="/docpatient">Go</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Calendar2 size={30} className="mb-2 text-success" />
              <Card.Title>Calendar</Card.Title>
              <Button variant="success" href="/calendar">Go</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
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
