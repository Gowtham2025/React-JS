import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Aboutus1 from "./aboutus";
import Home1 from "./home";
import Oraganic1 from "./orangicfood";
import Products1 from "./products";
import Menu1 from "./tasmenu";
import Works1 from "./works";


export default function Responsive() {
    return (
        <div>
        <Menu1/>
        <Home1/>
        <Works1/>
        <Aboutus1/>
        <Products1/>
        <Oraganic1/>
        </div>
    );
}