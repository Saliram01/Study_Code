import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import BlogDetail from "./components/pages/BlogDetail";
import BgChanger from "./components/p_list/BgChanger";
import EnqueryForm from './components/p_list/EnqueryForm'
import Error404 from "./components/pages/Error404";
import SignUpForm from "./components/p_list/SignUpForm";
import TTT from './components/p_list/TTT'
import Project from "./components/pages/Project";
import UseState from "./components/hooks/UseState";
import UseEffect from "./components/hooks/UseEffect";
import Context  from "./components/hooks/Context";
import UseRef from "./components/hooks/UseRef";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
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
        path : 'useEffect',
        element : <UseEffect/>
      },
      {
        path : 'context',
        element : <Context/>
      },
      {
        path : 'useRef',
        element : <UseRef/>
      },
      {
        path : 'useState',
        element : <UseState/>
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
      },
      {
        path : 'ttt',
        element : <TTT/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
 