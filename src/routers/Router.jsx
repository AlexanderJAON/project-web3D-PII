import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/Home";
import Acidification from "../pages/acidification/Acidification";
import Shortage from "../pages/shortage/Shortage";
import Pollution from "../pages/pollution/Pollution";
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
    },
    {
        path: "/acidification",
        element: (
            <ProtectedRoute><Acidification/></ProtectedRoute>
        )
    },
    {
        path: "/shortage",
        element: (
            <ProtectedRoute><Shortage/></ProtectedRoute>
        )
    },
    {
        path: "/pollution",
        element: (
            <ProtectedRoute><Pollution/></ProtectedRoute>
        )
    },
    
   
])

export default Router;