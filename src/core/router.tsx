import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-2xl font-bold">Contacts List</div>,
  },
  {
    path: "/contact/:id",
    element: <div>Contact Details</div>,
  },
]);
