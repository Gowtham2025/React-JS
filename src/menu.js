import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Responsive from "./restask/responsive";

export default function Menu() {
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <span className="ml-5 text-success"><FontAwesomeIcon icon={faCar}/>  Car Farms</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
            <div className="text-left p-3">
            <Link to={'/helloworld'} className="m-2 text-danger">Hello</Link>
            <Link to={'/CongartsCard'} className="m-2 text-danger">Congarts Card</Link>
            <Link to={'/SuperOverLeague'} className="m-2 text-danger">Super Over League</Link>
            <Link to={'/Socialbutton'} className="m-2 text-danger">Social button</Link>
            <Link to={'/Notification'} className="m-2 text-danger">Notification</Link>
            <Link to={'/Login'} className="m-2 text-danger">Login</Link>
            <Link to={'/TechnologyCards'} className="m-2 text-danger">Technology Cards</Link>
            <Link to={'/feedback'}  className="m-2 text-danger">FeedBack</Link>
            <Link to={'/addsub'}  className="m-2 text-danger">Incre/Decrement</Link>
            <Link to={'/mangoban'}  className="m-2 text-danger">Mango/Bananna</Link>
            <Link to={'/date'}  className="m-2 text-danger">Date Calculation</Link>
            <Link to={'/Carwala1'}  className="m-2 text-danger">Carwala</Link>
            <Link to={'/Responsive'} className="m-2 text-danger">Responsive</Link>
            <Link to={'/details'} className="m-2 text-danger">FakeFlipkart</Link>
            </div>
            </div>
                </div>
              </nav>
            </div>
            </div>
        
    );
}