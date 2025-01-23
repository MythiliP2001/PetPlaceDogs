import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./AdminLogin.css"; // Import the CSS file

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate admin login validation
    if (formData.username === "admin" && formData.password === "admin") {
      navigate("/admindashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <Container className="admin-login-page d-flex justify-content-center align-items-center">
      <div className="admin-login-form">
        <h2 className="text-center mb-4">Admin Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AdminLogin;
