import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import './index.css';
import Root from "./routes/root.jsx";
import {Home, General, Categories, Subject} from "./components/index.js";
import Register from './registerAndLogin/Register.jsx';
import Login from './registerAndLogin/Login.jsx';
import Error from "./components/Error.jsx";

/*const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path="/" element={<Root />}>
        <Route path="" element={<Home />} />
        <Route path="general" element={<General />} />
        <Route path="categories/" element={<Categories />} />
        <Route path="categories/:subject" element={<Subject />} />
        <Route path="*" element={<Error />}/>
      </Route>
    </Routes>
  )
);*/

const router = createBrowserRouter([
  {
    path: "register",
    element: <Register />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "general",
        element: <General />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:subject",
        element: <Subject />,
      },
      {
        path: "*",
        element: <Error />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
