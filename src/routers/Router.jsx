import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
    {
        path:"/", 
        element: (
            <PublicRoute><Login/></PublicRoute>
        )
        
    },
    {
        path:"/home",
        element: (
            <ProtectedRoute><Home/></ProtectedRoute>
        )
    }
])

export default Router;