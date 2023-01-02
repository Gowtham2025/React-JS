import React from "react";
import '../restask/products.css';
import'../../node_modules/bootstrap/dist/css/bootstrap.css';
import sw from '../Images/sw.jpg';
import ap from '../Images/ap.jpg';
import ta from '../Images/ta.jpg';
import Menu1 from "./tasmenu";

export default function Products1() {
    return (
        <div>
          
            <div className="container fluid rspp1">
                <div className="container p-5">
                <div class="card-deck">
                  <div class="card">
                    <img src={sw} class="card-img-top sw" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Fresh Fruits</h5>
                      <p class="card-text">Close up fruit photography, or close up photography of any kind is known within photography circles as macro photography. It can be applied to anything and although macro usually means a 1-2-1 ration, at my studio we can also get a LOT closer to the action and create some really striking images of food and products.</p>
                    </div>
                    <div class="card-footer">
                      <button className="btn">Learn More!!</button>
                    </div>
                  </div>
                  <div class="card">
                    <img src={ap} class="card-img-top sw" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Vegetables</h5>
                      <p class="card-text">Close up fruit photography, or close up photography of any kind is known within photography circles as macro photography. It can be applied to anything and although macro usually means a 1-2-1 ration, at my studio we can also get a LOT closer to the action and create some really striking images of food and products.</p>
                    </div>
                    <div class="card-footer">
                    <button className="btn">Learn More!!</button>
                    </div>
                  </div>
                  <div class="card">
                    <img src={ta} class="card-img-top sw" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Salad Leaves</h5>
                      <p class="card-text">Close up fruit photography, or close up photography of any kind is known within photography circles as macro photography. It can be applied to anything and although macro usually means a 1-2-1 ration, at my studio we can also get a LOT closer to the action and create some really striking images of food and products.</p>
                    </div>
                    <div class="card-footer">
                    <button className="btn">Learn More!!</button>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        </div>
    );
}