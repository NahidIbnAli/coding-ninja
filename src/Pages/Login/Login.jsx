import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import loginStyle from "./Login.module.css";
import { AuthContext } from "../../contexts/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";

const Login = () => {
  const { signIn, signInGoogle, signInGithub } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
        setErrorMessage(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  const handleSignInWithGithub = () => {
    signInGithub()
      .then((result) => {
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="pt-5 px-4">
      <Card className={`${loginStyle.cardd} mx-auto rounded-0`}>
        <Card.Body className="p-lg-5">
          <h3 className="fs-2  text-center mb-4">Login</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                className="py-2"
                type="email"
                placeholder="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                className="py-2"
                type="password"
                placeholder="password"
                required
              />
            </Form.Group>
            {/* display error message */}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <Button
              className="w-100 py-3 rounded-pill my-4 fw-semibold"
              type="submit"
            >
              Log in
            </Button>
          </Form>
          <div className={`${loginStyle.divider}`}>
            <div>
              <hr />
            </div>
            <p className="text-center">or</p>
            <div>
              <hr />
            </div>
          </div>
          <button
            onClick={handleSignInWithGoogle}
            className={`btn border w-100 py-3 rounded-pill fw-semibold mb-4 ${loginStyle.buttonHover}`}
          >
            <FcGoogle className="fs-3 me-1"></FcGoogle> Continue With Google
          </button>
          <button
            onClick={handleSignInWithGithub}
            className={`btn border w-100 py-3 rounded-pill fw-semibold ${loginStyle.buttonHover}`}
          >
            <BsGithub className="fs-4 me-1"></BsGithub> Continue With Github
          </button>
          <p className="text-center pt-5">
            Need an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
