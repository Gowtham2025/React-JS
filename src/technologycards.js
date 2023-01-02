import React from "react";
import './technologycards.css';
import Menu from './menu';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import img from '../src/Images/ds.png';
import img1 from '../src/Images/iot.jpg';
import img2 from '../src/Images/vr.jpg';
import img3 from '../src/Images/ml.jpeg';

export default function TechnologyCards() {
    return (
        <div>
            <Menu/>
            <div className="container">
            <div className="row">
                <div className="col-12 text-center"><h1>Learn 4.0 Technologies</h1></div>
                <div className="col-12 text-center"><p>Technology is the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human environment.</p></div>
                <div>
                    <div className="p-5">
                <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body tcc1">
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">Hacking and penetrating a system using various tools has become a significant.</p>
        <img src={img} className="tcim1"/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body tcc2">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text"> The Internet of Things (IoT) describes the network of physical objects—“things”.</p>
        <img src={img1} className="tcim1"/>
      </div>
    </div>
  </div>
</div>
</div>
<div className="p-5">
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body tcc3">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">The combined system created a stereoscopic image with a field of view wide enough.</p>
        <img src={img2} className="tcim1"/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body tcc4">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">Factors that make machine learning difficult  field of view wide field of view wide.</p>
        <img src={img3} className="tcim1"/>
      </div>
    </div>
  </div>
</div>
</div>
                </div>
            </div>

            </div>
        </div>
    );
}