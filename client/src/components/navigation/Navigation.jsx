import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import StoreIcon from '@mui/icons-material/Store';
// import FavoriteIcon from '@mui/icons-material/Favorite';

function Navigation() {


  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <nav>
    </nav>
        <Navbar.Brand href="#home">Pets World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/store/dogs">Store</Nav.Link>
            <Nav.Link as={Link} to="/Signin">SignIn</Nav.Link> 
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/petdetails">Pet Details</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <StoreIcon/> */}
          <div className="cart-icon-container">
                  <Link to="/cart" className="cart-icon-link">
                    <StoreIcon fontSize="large" />
                  </Link>
                </div>
          {/* <FavoriteIcon /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navigation;
