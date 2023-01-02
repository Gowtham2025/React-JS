import React from "react";
import '../restask/aboutus.css';
import'../../node_modules/bootstrap/dist/css/bootstrap.css';
import to from '../Images/to.jpg';
import fa from '../Images/fa.jpg';
import ga from '../Images/ga.jpg';
import pp from '../Images/pp.jpg';
import cow from '../Images/cow.jpg';
import Menu1 from "./tasmenu";
export default function Aboutus1() {
    return (
        <div>
          
            <div className="container-fluid rsbg3">
                <div className="row">
                    <div className="container">
                        <div className="col-lg-12 text-center"><h3>About Our Farm</h3></div>
                        <div className="col-lg-12 text-justify"><p>Nutrition Labelling. When you sell your fruits and vegetables, it is recommended that you supply the necessary nutritional information about these products with the help of package labels sell your fruits and vegetables, it is recommended that you supply the necessary nutritional information about these products with the help of package labels.</p></div>
                    </div>
                </div> 
                <div className="container p-3">
                <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Vegetables</h5>
                    <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                  </div>
                  <img src={to} class="card-img-top" alt="..."/>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">How It Works</h5>
                    <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                  </div>
                    <img src={fa} class="card-img-top" alt="..."/>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Flexiablity</h5>
                    <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                  </div>
                  <img src={ga} class="card-img-top" alt="..."/>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Fram Products</h5>
                    <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                  </div>
                  <img src={pp} class="card-img-top" alt="..."/>
                  </div>
                </div>
                </div>
                <div className="row p-5">
                  <div className="col-lg-6">
                        <img src={cow} className="card-img-top ave2"/>
                        </div>
                    <div className="col-lg-6 bg-white">
                    <h3><span className="asp1">Happy Farming</span></h3>
                    <h1>Happy Animals</h1>
                    <p>Vegetable shop images for free download. Browse or use the filters to find your next picture for your project. Supermarket, Stalls, Coolers, Market.</p>
                    <button className="btn bg-success">Learn More</button>
                  </div>
               </div>

        </div>
        </div>
    );
}