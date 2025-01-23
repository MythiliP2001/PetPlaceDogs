import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import './SignUp.css'; // Ensure the CSS file is imported

export default function SignUp() {
    const [user, setUser] = useState({});

    const changeValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const getPic = (e) => {
        setUser({ ...user, [e.target.name]: e.target.files[0] });
    }

    const formdata = new FormData();

    const handleSubmit = (e) => {
        e.preventDefault();

        formdata.append("fullname", user.fname);
        formdata.append("images", user.images);
        formdata.append("email", user.email);
        formdata.append("password", user.password);

        const api = "http://localhost:5000/UserRouter/signup";

        axios.post(api, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((res) => {
            alert(res.data);  // Success message from server
        })
        .catch((err) => {
            console.log(err);  // Log error if any
        });
    }

    return (
        <Form onSubmit={handleSubmit} encType="multipart/form-data" className="signup-form">
            <Container>
                <Row className="signup-form-row justify-content-center mt-3 p-2 border shadow rounded">
                    <Col lg={4} className="signup-form-col">
                        <Form.Label className="signup-form-label">Full Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="fname" 
                            onChange={changeValue} 
                            required 
                            className="signup-form-input"
                        />
                    </Col>

                    <Col lg={4} className="signup-form-col">
                        <Form.Label className="signup-form-label">Upload Photo</Form.Label>
                        <Form.Control 
                            type="file" 
                            name="images" 
                            onChange={getPic} 
                            required 
                            className="signup-form-input"
                        />
                    </Col>

                    <Col lg={4} className="signup-form-col">
                        <Form.Label className="signup-form-label">Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            onChange={changeValue} 
                            required 
                            className="signup-form-input"
                        />
                    </Col>

                    <Col lg={4} className="signup-form-col">
                        <Form.Label className="signup-form-label">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            onChange={changeValue} 
                            required 
                            className="signup-form-input"
                        />
                    </Col>

                    <Col lg={12} align="center" className="mt-2 p-3">
                        <Button variant="success" type="submit" className="signup-form-btn">
                            Register
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}
