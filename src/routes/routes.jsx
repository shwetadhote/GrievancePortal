import React from 'react'
import About from '../pages/about'
import Login from '../pages/Auth/login';
import SignUp from '../pages/Auth/signup';
import Complaint from '../pages/complaint';
import Contact from '../pages/contact';
import FaQ from '../pages/faq';
import Home from '../pages/home';

const Routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/faQ",
        element: <FaQ/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/complaint",
        element: <Complaint/>
    },
]

export default Routes;