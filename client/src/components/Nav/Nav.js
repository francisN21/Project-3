import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">
          <img
            alt="#"
            src="./images/map.jpg"
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{" "}
          <marquee scrollamount="1" behavior="alternate" width="90">
            Project 3
          </marquee>{" "}
        </Navbar.Brand>
        <Nav className="mr-auto collapse navbar-collapse justify-content-end">
          <NavDropdown title="Generate" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="/">something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
