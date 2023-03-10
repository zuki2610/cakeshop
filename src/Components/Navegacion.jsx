import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navegacion() {

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">🍰Happy Cake</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">🏡Home</Link>
              <Link to="/cakeshop/contacto">📒Contacto</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navegacion