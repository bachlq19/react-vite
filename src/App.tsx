import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Admin = lazy(() => import("@views/admin"));
const Client = lazy(() => import("@views/client"));

const router = createBrowserRouter([
  {
    element: <Admin />,
    path: "/admin",
  },
  {
    element: <Client />,
    path: "/",
  },
]);

function App() {
  return (
    <div>
      <div>this is header</div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
