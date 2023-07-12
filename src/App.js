import React from "react";
import Navbar from "./Navbar";
import "./style.css"
import Mainbanner from "./Mainbanner";
import About from './About';
// import Footer from "./Footer";
import Footer from "./Footer";


// import { ReactDOM } from "react-dom";
const App = () => {
    return (
        <div> <Navbar/>
        <Mainbanner/>
         <About/>
         <Footer/>
         </div>

    )
}


export default App 