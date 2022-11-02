import React from 'react'
import About from '../pages/about'
import Login from '../pages/Auth/login';
import Contact from '../pages/contact';
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
]

export default Routes;