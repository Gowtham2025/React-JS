import React from "react";
import '../restask/oraganicfood.css';
import'../../node_modules/bootstrap/dist/css/bootstrap.css';
import tta from '../Images/tta.jpg';
import Menu1 from "./tasmenu";

export default function Oraganic1(){
    return (
        <div >
            
            <div className="container-fluid row p-5">
            <div className="col-lg-6 bg-white">
            <h3><span className="osp1">Fresh Food</span></h3>
            <h1>Oraganic</h1>
            <p>Vegetable shop images for free download. Browse or use the filters to find your next picture for your project. Supermarket, Stalls, Coolers, Market.</p>
            <button className="btn bg-success">Learn More</button>
            </div>
            <div className="col-lg-6">
            <img src={tta} className="card-img-top tta2"/>
            </div>
            

        
        </div>
        </div>
    );
}