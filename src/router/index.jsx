import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage } from "@/pages/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;