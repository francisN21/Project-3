import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        // expand="lg"
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
            Map Eventz
          </marquee>{" "}
        </Navbar.Brand>
        {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-button"
        /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto collapse navbar-collapse justify-content-end">
            {/* {/* <NavDropdown title="Generate" id="collapsible-nav-dropdown"> */}
            {/* <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="/clusters">Clusters</NavDropdown.Item>  */}
            {/* <NavDropdown.Item href="/AddEvent">Add Event</NavDropdown.Item> */}
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            {/* <Nav.Link href="/about">About</Nav.Link> */}
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
