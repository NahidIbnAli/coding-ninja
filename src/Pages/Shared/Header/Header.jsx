import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../assets/codingNinja.svg";
import { BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import { Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { theme, handleToggleTheme, user, signOutUser } =
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
    <Navbar
      bg={theme === "light" && "white"}
      expand="lg"
      variant={theme === "dark" ? "dark" : "light"}
      className={`sticky-top ${theme === "dark" && "darkBg"}`}
    >
      <Container>
        <Link to="/" className={`navbar-brand`}>
          <img style={{ height: "40px" }} src={logo} alt="" />
          Coding Ninja
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-4">
            <Link to="/" className={`nav-link p-0`}>
              Courses
            </Link>
            <Link to="/faq" className={`nav-link p-0`}>
              FAQ
            </Link>
            <Link to="/blog" className={`nav-link p-0`}>
              Blog
            </Link>
            {/* dark mode toggle button */}
            <button
              onClick={handleToggleTheme}
              className={`nav-link p-0 btn border-0 ${
                theme === "dark" && "darkText"
              }`}
            >
              {theme === "dark" ? (
                <BsMoon className="fs-5"></BsMoon>
              ) : (
                <BsSun className="fs-5"></BsSun>
              )}
            </button>
            {user?.uid ? (
              <>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 200, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Link className="nav-link p-0">
                    <Image
                      style={{ height: "40px" }}
                      roundedCircle
                      src={
                        user?.photoURL || "https://i.ibb.co/RzLyywb/user.png"
                      }
                    ></Image>
                  </Link>
                </OverlayTrigger>
                <Button
                  onClick={handleSignOut}
                  variant={theme === "dark" ? "" : "primary"}
                  className={`rounded-pill ${
                    theme === "dark" && "bgP text-light"
                  }`}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login" className="nav-link p-0">
                <button
                  className={`btn px-4 rounded-pill ${
                    theme === "dark" ? "bgP text-light" : "btn-primary"
                  }`}
                >
                  Login
                </button>
              </Link>
            )}
          </Nav>
          <div className="d-lg-none text-center">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
