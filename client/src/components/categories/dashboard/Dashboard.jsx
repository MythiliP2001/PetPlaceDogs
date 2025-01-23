import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
  const [sales, setSales] = useState(0);
  const [orders, setOrders] = useState(0);
  const [customers, setCustomers] = useState(0);

  // useEffect(() => {
    
  //   axios.get('/api/dashboard').then((response) => {
  //     setSales(response.data.sales);
  //     setOrders(response.data.orders);
  //     setCustomers(response.data.customers);
  //   });
  // }, []);

  useEffect(() => {
    // Mock response
    const mockResponse = {
      data: {
        sales: 10000,
        orders: 120,
        customers: 85,
      },
    };
    setSales(mockResponse.data.sales);
    setOrders(mockResponse.data.orders);
    setCustomers(mockResponse.data.customers);
  }, []);
  

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Sales</Card.Title>
              <h2>${sales}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <h2>{orders}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Customers</Card.Title>
              <h2>{customers}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
