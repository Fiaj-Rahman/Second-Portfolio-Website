import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/MainPage/Home"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },


        ]

    },

])

