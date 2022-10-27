import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/codingNinja.svg";
import notFoundImage from "../../assets/error-404-not-found.png";

const NotFound = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container className="justify-content-center">
          <Link to="/" className="navbar-brand">
            <img style={{ height: "40px" }} src={logo} alt="" />
            Coding Ninja
          </Link>
        </Container>
      </Navbar>
      <Container className="text-center py-4">
        <h2 className="mb-4">Sorry, we couldn't find that page</h2>
        <img className="img-fluid rounded-3" src={notFoundImage} alt="" />
      </Container>
    </div>
  );
};

export default NotFound;
