import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Container } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <Container className="mt-5 w-halfPlus">
        <h2 className="fs-1 fw-bold my-5">
          <AiFillQuestionCircle className="mb-1 me-2"></AiFillQuestionCircle>
          Frequently Asked Questions
        </h2>
        <div className="mb-4">
          <h6 className="fw-bold text-2x">
            When does the course start and finish?
          </h6>
          <p className="lead text-custom">
            The course starts now and never ends! It is a completely self-paced
            online course - you decide when you start and when you finish.
          </p>
        </div>
        <div className="mb-4">
          <h6 className="fw-bold text-2x">
            How long do I have access to the course?
          </h6>
          <p className="lead text-custom">
            How does lifetime access sound? After enrolling, you have unlimited
            access to this course for as long as you like - across any and all
            devices you own.
          </p>
        </div>
        <div className="mb-4">
          <h6 className="fw-bold text-2x">
            What if I am unhappy with the course?
          </h6>
          <p className="lead text-custom ">
            We would never want you to be unhappy! If you are unsatisfied with
            your purchase, contact us in the first 30 days and we will give you
            a full refund.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
