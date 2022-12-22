import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../contexts/UserContext";
import "./Blog.css";

const Blog = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="py-5">
      <Container className="w-halfPlus">
        <div className="gridRow">
          <div
            className={`p-4 rounded-4 ${
              theme === "dark" ? "darkBg border-0" : "border"
            }`}
          >
            <h4>What is CORS?</h4>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-based security
              mechanism controlled and enforced by the client (web browser). It
              allows a service (API) to indicate any origin other than its own
              from which the client can request resources. It has been designed
              in response to the same-origin policy (SOP) that restricts how a
              website (HTML document or JS script) loaded by one origin can
              interact with a resource from another origin. CORS is used to
              explicitly allow some cross-origin requests while rejecting
              others.
            </p>
          </div>
          <div
            className={`p-4 border rounded-4 ${
              theme === "dark" ? "darkBg border-0" : "border"
            }`}
          >
            <h4>
              Why are you using Firebase? What other options do you have to
              implement authentication?
            </h4>
            <p>
              Firebase is easy to use for backend services. It has ready-made UI
              libraries, and backend services, it is possible to set up the
              whole authentication process in just a couple of minutes. Firebase
              allows users to authenticate with their phone number, email,
              Google, and Facebook accounts etc.
            </p>
            <p>
              There are some firebase alternatives that we can use for
              authentication services such as Auth0, MongoDB, Okta, passport,
              and JSON web token.
            </p>
          </div>
          <div
            className={`p-4 border rounded-4 ${
              theme === "dark" ? "darkBg border-0" : "border"
            }`}
          >
            <h4>How does the private route work?</h4>
            <p>
              The react private route component renders child components
              (children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return URL passed in the
              location state property.
            </p>
          </div>
          <div
            className={`p-4 border rounded-4 ${
              theme === "dark" ? "darkBg border-0" : "border"
            }`}
          >
            <h4>What is Node? How does Node work?</h4>
            <p>
              Node.js is an open source server environment. It is a used as
              backend service where JavaScript works on the server-side of the
              application. js runs on chrome v8 engine which converts JavaScript
              code into machine code, it is highly scalable, lightweight, fast,
              and data-intensive.
            </p>
            <p>
              Node.js accepts the request from the clients and sends the
              response, while working with the request node.js handles them with
              a single thread. To operate I/O operations or requests node.js use
              the concept of threads. Thread is a sequence of instructions that
              the server needs to perform. It runs parallel on the server to
              provide the information to multiple clients. Node.js is an event
              loop single-threaded language. It can handle concurrent requests
              with a single thread without blocking it for one request.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
