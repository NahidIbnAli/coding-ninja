import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <Row className="g-4">
      {courses.map((course) => (
        <Col key={course.id} lg="4">
          <CourseCard course={course}></CourseCard>
        </Col>
      ))}
    </Row>
  );
};

export default Courses;
