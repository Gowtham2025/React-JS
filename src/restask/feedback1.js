import React from "react";
import './feedback.css';
import'../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function FeedBack1() {
    return(
        <div>
            <div className="container fluid fbbg p-5">
                <div className="row bg-white p-5">
                    <div className="col-lg-12 p-5"><FontAwesomeIcon icon={faHeart} className="fa2"/></div>
                    <div className="col-lg-12 p-5"><h1>Thank You!!!</h1></div>
                    <div className="col-lg-12 p-5"><p>We will use this FeedBack to improve our customer support performance</p></div>
                    </div>
            </div>
        </div>
    );
}