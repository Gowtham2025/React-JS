import React from "react";
import './congardscard.css';
import Menu from './menu';
// import img from '../src/Images/img1.png';
import img2 from '../src/Images/img2.png';
import img3 from '../src/Images/img3.png';

export default function CongartsCard() {
    return(
    <div>
        <div class="cccc">
            <Menu/>
            <h1>Congratulations</h1>
            <div class="cccc1">
                <div>
                <img src={img2}/>
                <br/>
                
                <h2>Kiran</h2><br/>
                <p>Vishnu Institute Educational Trust and technology</p>
                <br/>
                
                <img src={img3}/></div>
            </div>
        </div>
    </div>
    );
} 