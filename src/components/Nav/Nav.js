import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
import styles from "./NavStyles";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">
          <img
            alt="#iconhere"
            src="#iconhere"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <marquee scrollamount="1" behavior="alternate" width="90">
            Project 3
          </marquee>{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Generate" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Something</NavDropdown.Item>
            <NavDropdown.Item href="/Saved Pass">something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about" style={styles.linkStyles}>
            About
          </Nav.Link>
          <Nav.Link href="/contact" style={styles.linkStyles}>
            Contacts
          </Nav.Link>
          <Nav.Link href="/login" style={styles.linkStyles}>
            Login
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
