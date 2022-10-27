import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/codingNinja.svg";
import { BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import { Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const Header = () => {
  const { toggleDark, handleModeToggle, user, signOutUser } =
    useContext(AuthContext);

  // tooltip content function
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign-out Successful"))
      .catch((error) => console.error(error));
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
          <Nav className="ms-auto align-items-center gap-4">
            <Link to="/" className="nav-link p-0">
              Courses
            </Link>
            <Link to="/faq" className="nav-link p-0">
              FAQ
            </Link>
            <Link to="/blog" className="nav-link p-0">
              Blog
            </Link>
            {/* dark mode toggle button */}
            <button
              onClick={handleModeToggle}
              className="nav-link p-0 btn border-0"
            >
              {toggleDark ? (
                <BsMoon className="fs-5"></BsMoon>
              ) : (
                <BsSun className="fs-5"></BsSun>
              )}
            </button>
            {user?.uid ? (
              <>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 200, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Link className="nav-link p-0">
                    <Image
                      style={{ height: "40px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  </Link>
                </OverlayTrigger>
                <Button onClick={handleSignOut} className="rounded-pill">
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login" className="nav-link p-0">
                <button className="btn btn-primary px-4 rounded-pill">
                  Login
                </button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
