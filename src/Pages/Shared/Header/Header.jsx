import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/codingNinja.svg";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img style={{ height: "40px" }} src={logo} alt="" />
          Coding Ninja
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Courses
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
