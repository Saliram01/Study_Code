import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Github, { githubLoader } from "./components/Github.jsx";
import Services, { loaderFunction } from "./components/Services.jsx";
import ServicesDetail from "./components/ServicesDetail.jsx";
import Todo from "./components/todo_list/Todo.jsx";
import Board from "./components/tic_tac_toe/Board.jsx";
import UIData from "./components/api/UIData.jsx";
import {CounterProvider} from "./components/context/Counter.jsx";
import ContexApi from "./components/contex_api/ContexApi.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route loader={loaderFunction} path="services" element={<Services />} />
      <Route path="services/:id" element={<ServicesDetail />} />
      <Route loader={githubLoader} path="github" element={<Github />} />
      <Route path="todo" element={<Todo/>} />
      <Route path="ttt" element={<Board/>}/>
      <Route path="api" element={<UIData/>}/>
      <Route path="context" element={<CounterProvider> <ContexApi/> </CounterProvider>}/>
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App/>,
//     children : [
//       {
//         path : '/',
//         element : <Home />
//       },
//       {
//         path : 'about',
//         element : <About/>
//       },
//       {
//         path : 'github',
//         element : <Github/>
//       },
//       {
//         path : 'contact',
//         element : <Contact/>
//       },
//     ]
//   }
// ])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
