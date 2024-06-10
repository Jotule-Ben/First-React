import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormFunc(props) {
  const name = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" ref={name} />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" ref={lastName} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Control placeholder="Email" ref={email} />
            </Col>
            <Col>
              <Form.Control placeholder="Phone" ref={phone} />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormFunc;
