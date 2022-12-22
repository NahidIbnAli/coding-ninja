import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";

const LeftSideNav = () => {
  const { theme } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  // fetch data for courses name and id
  useEffect(() => {
    fetch("https://coding-ninja-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Nav
      className={`flex-column gap-2 p-4 rounded-4 ${
        theme === "dark" ? "darkBg" : "bg-white"
      }`}
    >
      {courses.map((course) => (
        <Link
          to={`course/${course.id}`}
          key={course.id}
          className={`nav-link ${theme === "dark" && "textP"}`}
        >
          {course.name}
        </Link>
      ))}
    </Nav>
  );
};

export default LeftSideNav;
