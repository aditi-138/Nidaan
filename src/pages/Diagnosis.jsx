// src/pages/Diagnosis.jsx
import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FileEarmarkMedical } from "react-bootstrap-icons";

export default function Diagnosis() {
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-lg bg-white text-dark">
        <div className="d-flex align-items-center mb-3">
          <FileEarmarkMedical size={32} className="me-2 text-danger" />
          <h2 className="mb-0">Diagnosis Upload</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Upload Medical Image</Form.Label>
            <Form.Control type="file" accept="image/*" />
          </Form.Group>

          <Button variant="danger" className="w-100">
            Predict Diagnosis
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
