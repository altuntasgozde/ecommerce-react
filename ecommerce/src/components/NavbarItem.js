import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavbarItem = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Link to="/">

        Brand
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              Home
            </Link>
            <Link to="/cart">
              Cart
            </Link>
            <Link to="/newproduct">
              +New Product
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
