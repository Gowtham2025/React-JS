import React from "react";
import './login.css';
import Menu from './menu';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from '../src/Images/com2.jpg'


export default function Login() {
    return (
        <div>
            <Menu/>
            <div className="lgbg p-5">
                <div className="container rounded bg-white ">
                    <div className="row">
                    <div className="col-lg-4 col-sm-12 m-3">
                       <div className="lgbg2"> <img src={img} className="lgimg"/></div>
                    </div>
                    <div className="container col-lg-4 col-sm-12 m-3">
                    <form>
                        <div className="col-12"><h1>Member Login</h1></div>
                        <div className="col-12 m-3"><input type="text" name="email" id="email" placeholder="Email" /></div>
                        <div className="col-12 m-3"><input type="password" name="Password" id="psw" placeholder="Password" /></div>
                        <div className="col-12 m-3"><button className="lgbtn1">LOGIN</button></div>
                        <div className="col-12 m-3">Forget <span className="lgt1"> Username / Password?</span></div>
                        <div className="col-12"><span className="lgt1">create your account </span></div>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}