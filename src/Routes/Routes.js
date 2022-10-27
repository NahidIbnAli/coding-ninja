import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";
import Checkout from "../Pages/Shared/Checkout/Checkout";
import CourseDetail from "../Pages/Shared/CourseDetail/CourseDetail";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://coding-ninja-server.vercel.app/courses/all"),
        element: <Courses></Courses>,
      },
      {
        path: "course/:id",
        loader: ({ params }) =>
          fetch(`https://coding-ninja-server.vercel.app/course/${params.id}`),
        element: <CourseDetail></CourseDetail>,
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout/:id",
        loader: ({ params }) =>
          fetch(`https://coding-ninja-server.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
