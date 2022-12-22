import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";

const Courses = () => {
  const courses = useLoaderData();
  return (
    // course card container
    <div className="pt-4 pb-5">
      <Container>
        <Row className="g-4">
          <Col className="d-none d-lg-block" lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <Row className="g-4">
              {courses.map((course) => (
                <Col key={course.id} md="6" xl="4">
                  <CourseCard course={course}></CourseCard>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
