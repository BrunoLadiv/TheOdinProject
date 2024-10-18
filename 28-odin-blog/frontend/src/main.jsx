import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostPage from "./pages/BlogPage.jsx";
import Tags from "./pages/Tags.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
    children: [
      {
        path: "/create-blog",
        element: <PrivateRoute />,
      },
      {
        path: "/edit-blog",
        element: <PrivateRoute />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "/tags/:tag",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/blog/:slug",
        element: <PostPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
