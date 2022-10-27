import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);
  // fetch data for courses name and id
  useEffect(() => {
    fetch("https://coding-ninja-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Nav className="flex-column gap-2 bg-white p-4 rounded-4">
      {courses.map((course) => (
        <Link to={`course/${course.id}`} key={course.id} className="nav-link">
          {course.name}
        </Link>
      ))}
    </Nav>
  );
};

export default LeftSideNav;
