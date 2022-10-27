import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import cardStyle from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
  const { id, image, name, title, price } = course;
  return (
    <Card
      className={`rounded-4 border-0 text-center h-100 ${cardStyle.hoverBorder}`}
    >
      <Card.Img src={image} className={cardStyle.borderRadius} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-5">
          <Link to={`course/${id}`}>
            <Button variant="primary">Add to Cart</Button>
          </Link>
          <Card.Text className="fw-semibold text-primary">${price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
