import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/Home";
import Acidification from "../pages/acidification/Acidification";
import Shortage from "../pages/shortage/Shortage";
import Pollution from "../pages/pollution/Pollution";
import Sensitization from "../pages/acidification/Sensitization";
import Awareness from "../pages/shortage/Awareness";
import Menu from "../components/Menu"; // Importa el componente Menu

const Router = createBrowserRouter([
    {
        path: "/", 
        element: (
            <PublicRoute><Login /></PublicRoute>
        )
    },
    {
        path: "/home",
        element: (
            <>
                <Menu />
                <ProtectedRoute><Home /></ProtectedRoute>
            </>
        )
    },
    {
        path: "/acidification",
        element: (
            <>
                <Menu />
                <ProtectedRoute><Acidification /></ProtectedRoute>
            </>
        )
    },
    {
        path: "/shortage",
        element: (
            <>
                <Menu />
                <ProtectedRoute><Shortage /></ProtectedRoute>
            </>
        )
    },
    {
        path: "/pollution",
        element: (
            <>
                <Menu />
                <ProtectedRoute><Pollution /></ProtectedRoute>
            </>
        )
    },
    {
        path: "/sensitization",
        element: (
            <>
                <Menu />
                <ProtectedRoute><Sensitization /></ProtectedRoute>
            </>
        )
    },
    {
        path: "/awareness",
        element: (
            <>
                <Menu />
                <ProtectedRoute><Awareness /></ProtectedRoute>
            </>
        )
    }
]);

export default Router;