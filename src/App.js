import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {IMG_CDN_URL} from "./config"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";


const AppLayout =() =>{
    return(
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
    )
}

const appRouter=createBrowserRouter([
    {
        path : "/",
        element:<AppLayout/>
    },
    {
        path : "/about",
        element:<About/>
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
