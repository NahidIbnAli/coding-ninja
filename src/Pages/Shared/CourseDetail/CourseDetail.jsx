import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsCloudDownload } from "react-icons/bs";
import { Container } from "react-bootstrap";
import "./CourseDetail.css";

const CourseDetail = () => {
  const courseDetail = useLoaderData();
  const { id, name, title, image, description, price, rating, features } =
    courseDetail;
  return (
    // course details section
    <section>
      {/* course detail header */}
      <div className="bg-custom py-5 text-center text-light">
        <h2 className="display-5 fw-semibold">{name}</h2>
        <p className="lead">{title}</p>
        <Button variant="outline-light">
          <BsCloudDownload></BsCloudDownload> Course Module
        </Button>
      </div>
      {/* course detail body */}
      <Container className="w-half py-5">
        <Card className="border-0">
          <div className="p-4">
            <Card.Img src={image} className="rounded-3" />
          </div>
          <Card.Body className="p-4 pt-0">
            <Card.Title className="fs-3 fw-bold mt-0 mb-3">{name}</Card.Title>
            {/* course description */}
            <div>
              {description.map((d) => (
                <p className="mb-4" key={d}>
                  {d}
                </p>
              ))}
            </div>
            {/* course features */}
            <div className="pb-1">
              <h3 className="mb-3">What You will Learn...</h3>
              <ul className="list-unstyled">
                {features.map((feature) => (
                  <li key={feature} className="mb-3">
                    <FaCheck className="me-1"></FaCheck> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex gap-2 align-items-center">
                <p className="m-0 fw-bold text-muted lead">{rating}</p>
                <p className="m-0 pb-1 lead">
                  <AiFillStar className="text-warning"></AiFillStar>
                </p>
              </div>
              <div>
                <p className="m-0 fw-bold text-primary lead">${price}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default CourseDetail;
