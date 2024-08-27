import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";
import Home from "./pages/Home.jsx";
import PostPage from "./pages/BlogPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
    children: [
      {
        path: "/create-blog",
        element: <CreatePost />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:blogId",
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
