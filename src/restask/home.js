import React from "react";
import './home.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Menu1 from "./tasmenu";

export default function Home1(){
    return (
        <div>
            
            <div className="container-fluid rebg">
                <div className="row">
                    <div className=" col-lg-6 r1">
                        <h3><span className="hsp1">Fresh Food</span></h3>
                        <h1><span className="hsp2">Oraganic</span></h1>
                        <p>Vegetable shop images for free download. Browse or use the filters to find your next picture for your project. Supermarket, Stalls, Coolers, Market.</p>
                        <button className="btn bg-success">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}