import React,{useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import man from '../src/Images/man.png';
import ban from '../src/Images/ban1.jpg';
import '../src/Images/mangoban.css'

export default function MangoBan() {
    const[increment,setIncrement]=useState(0)
    const[increment1,setIncrement1]=useState(0)
    return (
        <div>
            <div className="container fluid bg-warning p-5">
                <div className=" row bg-white p-5">
                    <div className="col-lg-12">
                        <h1>Bob ate <span className="spma1">{increment}</span> mangoes <span className="spma1">{increment1}</span> bananas</h1>
                    </div>
                    <div className="col-lg-6">
                        <img src={man} className="ma"/><br/>
                        <button className="btn bg-primary" onClick={()=>{setIncrement(increment+1)}}>Eat Mangoes</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={ban} className="ma container"/><br/>
                        <button className="btn bg-primary" onClick={()=>{setIncrement1(increment1+1)}}>Eat Banana</button>
                    </div>
                </div>
            </div>
        </div>
    );
}