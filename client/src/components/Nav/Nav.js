// Import all the react goodness
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// Navbar component
const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/">
          <img
            alt="#"
            src="./images/map.jpg"
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{" "}
          <marquee scrollamount="1" behavior="alternate" width="90">
            Eventz
          </marquee>{" "}
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto collapse navbar-collapse justify-content-end">
            {/* Links to each event */}
            <Link className="nav-link" to="/dashboard">Events</Link>
            <Link className="nav-link" to="/clusters">Clusters</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
