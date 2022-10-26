import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imageStyle from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
  const { id, image, name, title, price } = course;
  return (
    <Card className="rounded-4 border-0 shadow-lg">
      <Card.Img
        src={image}
        className={`rounded-0 ${imageStyle.borderRadius}`}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
