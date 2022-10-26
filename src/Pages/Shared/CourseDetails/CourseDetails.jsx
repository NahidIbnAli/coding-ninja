import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { FaCheck, FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, name, image, description, price, rating, features } =
    courseDetails;
  return (
    // course details card
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
        <div>
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
            <p className="m-0 fw-semibold">{rating}</p>
            <p className="m-0 pb-1">
              <FaStar className="text-warning"></FaStar>
            </p>
          </div>
          <div>
            <p className="m-0 fw-semibold text-primary">${price}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseDetails;
