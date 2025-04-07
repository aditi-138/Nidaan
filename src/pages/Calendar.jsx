import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Calendar3 } from "react-bootstrap-icons";

export default function Calendar() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/background.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card
              className="shadow-lg p-4 rounded"
              style={{ backgroundColor: "#ffffff" }} // White card
            >
              <Card.Body>
                <div className="d-flex align-items-center mb-4">
                  <Calendar3 size={32} className="text-primary me-2" />
                  <Card.Title className="mb-0 fs-3">Doctor's Calendar</Card.Title>
                </div>

                <Form>
                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Select a Date</Form.Label>
                    <Form.Control
                      type="date"
                      className="bg-white text-black"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formNotes">
                    <Form.Label>Notes or Appointments</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Add your appointment notes here..."
                      rows={3}
                      className="bg-white text-black"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Save Appointment
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
