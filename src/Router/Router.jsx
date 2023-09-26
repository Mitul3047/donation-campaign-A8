import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ShowDetails from "../Pages/ShowDetails/ShowDetails";



const Router =createBrowserRouter([
    {
        path: '/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/data.json'),
            },
            {
                path:'/donation',
                element:<Donation></Donation>,  
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>, 
                loader:()=> fetch('/data.json'), 
            },
            {
                path:'/category/:id',
                element:<ShowDetails></ShowDetails>,
                loader:()=> fetch('/data.json'),
            },
        ]
    }
])

export default Router;