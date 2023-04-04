import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import BlogAdmin from './admin/pages/BlogAdmin';
import OpinionsAdmin from './admin/pages/OpinionsAdmin';
import './i18n';
import './index.css';
import AdminPanel from './pages/AdminPanel';
import LandingPage from './pages/LandingPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      {
        path: "opinions",
        element: <OpinionsAdmin />,
      },
      {
        path: "blog",
        element: <BlogAdmin />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
