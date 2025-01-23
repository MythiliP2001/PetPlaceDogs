import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));  // Assuming token is stored in localStorage
  const navigate = useNavigate(); // for redirecting user

  useEffect(() => {
    const fetchOrders = async () => {
      if (!authToken) {
        setError('You must be logged in to view orders');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/adminview/vieworder', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.data.success) {
          setOrders(response.data.orders);
        } else {
          setError('Error fetching orders');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Error fetching orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [authToken]);

  // const handleLoginRedirect = () => {
  //   navigate('/login');  // Redirect to login page if not logged in
  // };

  if (loading) return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
  if (error) return (
    <div>
      <p>{error}</p>
      <button onClick={handleLoginRedirect}>Login</button> {/* Redirect user to login page */}
    </div>
  );
  if (orders.length === 0) return <p>No orders available at the moment.</p>;

  return (
    <Container className="py-5">
      <h2>All Orders</h2>
      <Row>
        {orders.map((order) => (
          <Col md={4} key={order._id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Order ID: {order._id}</Card.Title>
                <Card.Text>
                  <strong>User:</strong> {order.userId.name} ({order.userId.email})
                </Card.Text>
                <Card.Text>
                  <strong>Status:</strong> {order.status}
                </Card.Text>
                <Card.Text>
                  <strong>Total Price:</strong> ${order.totalPrice}
                </Card.Text>

                <ListGroup variant="flush">
                  {(order.cartItems || []).map((item, index) => (
                    <ListGroup.Item key={index}>
                      <strong>{item.name}</strong> x{item.quantity} - ${item.price}
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <Card.Footer>
                  <strong>Shipping Address:</strong> {order.shippingAddress}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminViewOrders;
