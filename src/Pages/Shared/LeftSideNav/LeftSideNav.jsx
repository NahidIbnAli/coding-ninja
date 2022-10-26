import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Nav className="flex-column bg-light p-4 rounded">
      {courses.map((course) => (
        <Link to={`course/${course.id}`} key={course.id} className="nav-link">
          {course.name}
        </Link>
      ))}
    </Nav>
  );
};

export default LeftSideNav;
