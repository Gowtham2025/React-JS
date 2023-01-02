import React from "react";
import './feedback.css';
import'../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceMeh,faFaceLaugh } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FeedBack1 from "./feedback1";




export default function FeedBack() {
    return(
        <div>
            <div className="container fluid fbbg p-5">
                <div className="row bg-white p-5">
                    <div className="col-lg-12 p-5"><h1>How satisfied are you with our customer support performance?</h1></div>
                    <div className="col-lg-4"><Link to='/feedback1'><FontAwesomeIcon icon={faFaceSadTear} className="fa1"/><br/><h3>Sad</h3></Link></div>
                    <div className="col-lg-4"><Link to='/feedback1'><FontAwesomeIcon icon={faFaceMeh} className="fa1"/><br/><h3>None</h3></Link></div>
                    <div className="col-lg-4"><Link to='/feedback1'><FontAwesomeIcon icon={faFaceLaugh} className="fa1"/><br/><h3>Happy</h3></Link></div>
                </div>
            </div>
        </div>
    );
}