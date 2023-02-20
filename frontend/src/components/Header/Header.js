import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/home">Ayurvedic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/mycategory">Product</Nav.Link>
            <Nav.Link href="#action2">Clinic</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            
          </Nav>
         
          <i class="bi bi-bell px-2"></i>
          <i class="bi bi-cart px-5"></i>
          <NavDropdown title="navodapiumi691@gmail.com" id="navbarScrollingDropdown">
             
              <NavDropdown.Item href="#action4">
                Lonout
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Login
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header