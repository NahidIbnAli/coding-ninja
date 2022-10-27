import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import CourseDetail from "../Pages/Shared/CourseDetail/CourseDetail";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/courses/all"),
        element: <Courses></Courses>,
      },
      {
        path: "course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetail></CourseDetail>,
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
