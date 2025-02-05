import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import StoreIcon from '@mui/icons-material/Store';
import './Navigation.css'; // Import custom CSS for styling

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          Pets World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
            <Nav.Link as={Link} to="/store/dogs" className="nav-item">Store</Nav.Link>
            <Nav.Link as={Link} to="/signin" className="nav-item">SignIn</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item as={Link} to="/petdetails">Pet Details</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="cart-icon-container">
            <Link to="/cart" className="cart-icon-link">
              <StoreIcon fontSize="large" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
