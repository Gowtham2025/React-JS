import React from "react";
import Menu from './menu';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck,faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Notification(){
    return (
    <div>
        <Menu/>
        <div className="container col-lg-6">
            <h1>Notification</h1>
            <div className="bg-primary m-3 p-3 text-left text-white"><h2><FontAwesomeIcon icon={faCircleCheck}/>   Infromation Message</h2></div>
            <div className="bg-success m-3 p-3 text-left text-white"><h2><FontAwesomeIcon icon={faCircleCheck}/>Success Message</h2></div>
            <div className="bg-warning m-3 p-3 text-left text-white"><h2><FontAwesomeIcon icon={faBell}/>Warning Message</h2></div>
            <div className="bg-danger m-3 p-3 text-left text-white"><h2><FontAwesomeIcon icon={faCircleExclamation}/>Error Message</h2></div>
        </div>
    </div>
    );
}
