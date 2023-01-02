import React from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
// import '../../node_modules/bootstrap/dist/js/bootstrap.js';

export default function Menu1() {
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <span className="ml-5 text-success"><FontAwesomeIcon icon={faLeaf}/>  Organic Farms</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className="ml-5" to='/home'>Home</Link>
                    <Link className="ml-5" to='/works'>Wroks</Link>
                    <Link className="ml-5" to='/aboutus'>Aboutus</Link>
                    <Link className="ml-5" to='/products'>Products</Link>
                    <Link className="ml-5" to='/orangicfood'>Oraganic Products</Link>
                    <Link className="ml-5" to='/responsive'>Responsive</Link>
                  </div>
                </div>
              </nav>
            </div>
        </div>
    );
}