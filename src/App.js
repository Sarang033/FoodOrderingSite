import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {IMG_CDN_URL} from "./config"


const AppLayout =() =>{
    return(
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
