import React from "react";
import '../restask/works.css';
import'../../node_modules/bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import sh1 from '../Images/sheep1.jpg';
import ch1 from '../Images/ch1.jpg';
import ve1 from '../Images/ve1.jpg';
import ve2 from '../Images/ve3.jpg';
import { faLeaf,faCow,faTractor } from "@fortawesome/free-solid-svg-icons";
import Menu1 from "./tasmenu";


export default function Works1() {
    return (
        <div>
          
            <div className="container-fluid rsbg2">
                <div className="row">
                    <div className="container">
                        <div className="col-lg-12 text-center"><h3>How It Works?</h3></div>
                        <div className="col-lg-12 text-justify"><p>Nutrition Labelling. When you sell your fruits and vegetables, it is recommended that you supply the necessary nutritional information about these products with the help of package labels sell your fruits and vegetables, it is recommended that you supply the necessary nutritional information about these products with the help of package labels.</p></div>
                    </div>
                </div> 
                <div class="card-deck">
                    <div className="card">
                      <img src={sh1} className="card-img-top" alt="..."/>
                    </div>
                    <div className="card">
                      <FontAwesomeIcon icon={faLeaf}/>
                      <div className="card-body">
                        <h5 className="card-title text-center">Organic Farming</h5>
                        <p className="card-text text-center">Organic farming, also known as ecological farming or biological farming, is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal and places emphasis on techniques such as crop rotation and companion planting.</p>
                      </div>
                    </div>
                    
                    <div className="card">
                      <img src={ch1} className="card-img-top" alt="..."/>
                    </div>
                  </div>
                  <div className="card-deck">
                    <div className="card">
                    <FontAwesomeIcon icon={faCow}/>
                      <div className="card-body">
                        <h5 class="card-title  text-center">Animal Husbandary</h5>
                        <p class="card-text  text-center">Organic farming, also known as ecological farming or biological farming, is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal and places emphasis on techniques such as crop rotation and companion planting.</p>
                      </div>
                    </div>
                    <div class="card">
                      <img src={ve1} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card">
                      <FontAwesomeIcon icon={faTractor}/>
                      <div class="card-body">
                        <h5 class="card-title  text-center">Arable Farming</h5>
                        <p class="card-text  text-center">Organic farming, also known as ecological farming or biological farming, is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal and places emphasis on techniques such as crop rotation and companion planting.</p>
                      </div>
                    </div>
                    <div>
                    </div>
                    </div><br/>
                    <div className="row p-4">
                    <div className="col-lg-6 col-12">
                          <img src={ve2} className="card-img-top ve2"/>
                          </div>
                      <div className="col-lg-6 col-12 bg-white">
                      <h3><span className="wsp1">Fresh Food</span></h3>
                      <h1>Oraganic</h1>
                      <p>Vegetable shop images for free download. Browse or use the filters to find your next picture for your project. Supermarket, Stalls, Coolers, Market.</p>
                      <button className="btn bg-success">Learn More</button>
                      </div>
    

      </div>
    </div>
    </div>
    );
}