import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import signUpStyle from "./SignUp.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
      .then((result) => {
        form.reset();
        updateUserProfile(name, photoUrl);
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="pt-5 px-4">
      <Card className={`${signUpStyle.cardd} mx-auto rounded-0`}>
        <Card.Body className="p-lg-5">
          <h3 className="fs-2  text-center mb-4">Sign Up</h3>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-4" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                className="py-2"
                type="text"
                placeholder="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPhotoUrl">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                name="photoUrl"
                className="py-2"
                type="text"
                placeholder="photo url"
                required
              />
            </Form.Group>
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
            <Button
              className="w-100 py-3 rounded-pill my-4 fw-semibold"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
