import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import BgChanger from "./p_list/BgChanger";
import EnqueryForm from "./p_list/EnqueryForm";
import Error404 from "./pages/Error404";
import SignUpForm from "./p_list/SignUpForm";
import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path : '*',
    element : <Error404/>
  },
  {
    path: "about",
    element: <About/>, 
  },
  {
    path: "blog", 
    element: <Blog/>,
  },
  {
    path : 'project',
    element : <Project/>
  },
  { 
    path: "contact", 
    element: <Contact />,
  },
  {
    path : 'blog/:id',
    element : <BlogDetail/>
  },
  {
    path : 'bgchanger',
    element : <BgChanger/>
  },
  {
    path : 'enquery',
    element : <EnqueryForm/>
  },
  {
    path : 'sign-up',
    element : <SignUpForm/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
 