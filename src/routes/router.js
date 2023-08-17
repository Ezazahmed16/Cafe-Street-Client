import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Order from '../components/Order/Order'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order",
                element: <Order></Order>,
            },
        ]
    },
])

export default router