import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./MainLayOut/MainLayOut";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
        ]
    },
]);

export default router;