import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const Admin = lazy(() => import("@views/admin"));
const Client = lazy(() => import("@views/client"));

const AdminLayout = () => {
  return (
    <div>
      this is admin layout
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const ClientLayout = () => {
  return (
    <div>
      this is client layout
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="admin" element={<AdminLayout />}>
//         <Route index element={<Admin />} />
//         <Route path="children" element={<Client />} />
//       </Route>
//       <Route element={<ClientLayout />}>
//         <Route path="/" element={<Client />} />
//       </Route>
//     </>
//   )
// );

const router = createBrowserRouter([
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Admin /> },
      { path: "children", element: <Client /> },
    ],
  },
  {
    element: <ClientLayout />,
    children: [{ path: "/", element: <Client /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
