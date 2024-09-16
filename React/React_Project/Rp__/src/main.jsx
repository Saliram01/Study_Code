import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "project",
    element: <Project/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path : 'blog/:id',
    element : <BlogDetail/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
