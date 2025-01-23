import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css"; // Import the CSS file for styling

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleManagePet = (path) => {
    navigate(path);
  };

  const handleProductsPet =(path)=>{
    navigate(path)
  }

  const handleViewOrders = (path) => {
    navigate(path);
  };

  return (
    <Container className="admin-dashboard py-5">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card
            className="dashboard-card mb-3"
            onClick={() =>
               handleManagePet("/adminexplorecategory")}
          >
            <Card.Body>
              <Card.Title>Manage Pets</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card mb-3"
          onClick={()=>
            handleProductsPet('/adminproducts')}
          >
            <Card.Body>
              <Card.Title>Manage products</Card.Title>
            
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card mb-3" 
          onClick={()=> handleViewOrders('/adminvieworders')}>
            <Card.Body>
              <Card.Title>View Orders</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </Container>
  );
};

export default AdminDashboard;
