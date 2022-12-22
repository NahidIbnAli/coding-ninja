import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import cardStyle from "./CourseCard.module.css";

const CourseCard = ({ course }) => {
  const { theme } = useContext(AuthContext);
  const { id, image, name, title, price } = course;
  return (
    <Card
      className={`rounded-4 border-0 text-center h-100 ${
        cardStyle.hoverBorder
      } ${theme === "dark" && "darkBg"}`}
    >
      <Card.Img src={image} className={cardStyle.borderRadius} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-5">
          <Link to={`course/${id}`}>
            <Button
              variant={theme === "dark" ? "" : "primary"}
              className={theme === "dark" && "bgP text-light"}
            >
              Add to Cart
            </Button>
          </Link>
          <Card.Text
            className={`fw-semibold fs-5 ${
              theme === "dark" ? "textP" : "text-primary"
            }`}
          >
            ${price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
