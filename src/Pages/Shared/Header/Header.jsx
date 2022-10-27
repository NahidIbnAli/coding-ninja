import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/codingNinja.svg";
import { BsMoon, BsSun } from "react-icons/bs";

const Header = () => {
  const [toggleDark, setToggleDark] = useState(false);
  // dark mode toggle handler
  const handleModeToggle = (event) => {
    event.preventDefault();
    setToggleDark(!toggleDark);
  };

  return (
    <Navbar bg="white" expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img style={{ height: "40px" }} src={logo} alt="" />
          Coding Ninja
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-3">
            <Link to="/" className="nav-link">
              Courses
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            {/* dark mode toggle button */}
            <button
              onClick={handleModeToggle}
              className="nav-link d-flex align-items-center gap-2 btn border-0"
            >
              {toggleDark ? (
                <BsMoon className="fs-5"></BsMoon>
              ) : (
                <BsSun className="fs-5"></BsSun>
              )}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
