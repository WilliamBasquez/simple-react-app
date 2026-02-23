import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Bill from "./Components/Bill.jsx";
import BillEdit from "./Pages/BillEdit.jsx";
import BillList from "./Pages/BillList.jsx";
import GroupedBills from "./Pages/GroupedBills.jsx";
import NotFound from "./Pages/NotFound.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bills",
    element: <BillList />,
  },
  {
    path: "/bills/:id",
    element: <Bill />,
  },
  {
    path: "/bills/Edit/:id",
    element: <BillEdit />,
  },
  {
    path: "/grouped-bills",
    element: <GroupedBills />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
