import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
