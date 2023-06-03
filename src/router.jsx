import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";

import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import AddArtikel from "./views/AddArtikel";
import UpdateArtikel from "./views/UpdateArtikel";
import Artikel from "./views/Artikel";

const router = createBrowserRouter([

    {
        path:'/',
        element: <DefaultLayout />,
        children: [
            {
                path:'/dashboard',
                element:<Navigate to='/' />
            },
            {
                path: '/',
                element:<Dashboard />,
            },
            {
                path: '/artikel',
                element: <Artikel />,
            },
            {
                path: '/artikel/add',
                element: <AddArtikel />,
            },
            {
                path: '/artikel/:id/edit',
                element: <UpdateArtikel />,
            },
            {
                path: '/artikel/notfound',
                element: <NotFound />,
            },
            


        ]
    },
  
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/login" />
            },
            {
                path: '/login',
                element: <Login />
            },  
            {
                path: '/signup',
                element: <Signup />
            },
            
        ],
    },

])

export default router;