import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";  
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
    const [user,setUser]=useState({
        name:"Sarang Sharma",
        email:"sarangchamp2004@gmail.com"
    });


    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Instamart/>
            },
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
