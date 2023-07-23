import React from "react";
import Navbar from "./Navbar";
import "./style.css"
import Mainbanner from "./Mainbanner";
import About from './About';
import Contact from "./Contact";
// import Footer from "./Footer";
import Footer from "./Footer";


// import { ReactDOM } from "react-dom";
const App = () => {
    return (
        <div> <Navbar/>
        <Mainbanner/>
         <About/>
         <Contact/>
         <Footer/>
         </div>

    )
}


export default App 