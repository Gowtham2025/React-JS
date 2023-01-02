import React from "react";
import Menu from './menu';
import './superoverleague.css';
import img1 from '../src/Images/img4.png';
import img2 from '../src/Images/img5.png';

export default function SuperOverLeague(){
    return (
        <div>
            <Menu/>
            <div class="solbg">
                <h1 class="solfn">Super Over League</h1>
                <img src={img1}/>
                <img src={img2}/>
            </div>
        </div>
    );
    }