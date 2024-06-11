import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});

  const validateFn = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "password is required";
      isValid = false;
    } else if (formData.password.length < 4) {
      tempErrors.password = "Password length must be 4 or more";
      isValid = false;
    }
    setError(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFn()) {
      setFormData({
        email: "",
        password: "",
      });
      setError({});
    }
  };

  return (
    <>
      <Form>
        <Row className="mt-3">
          <Col>
            <Form.Control
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </Col>
          <Col>
            <Form.Control
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </Col>
        </Row>
      </Form>
      <Button onClick={handleSubmit}>Save</Button>
    </>
  );
};

export default Login;
