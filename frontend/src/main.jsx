import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';
import Root from "./routes/root.jsx";
import {Home, General, Categories, Subject} from "./components/index.js";
import Error from "./components/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="general" element={<General />} />
      <Route path="categories/" element={<Categories />} />
      <Route path="categories/:subject" element={<Subject />} />
      <Route path="*" element={<Error />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
