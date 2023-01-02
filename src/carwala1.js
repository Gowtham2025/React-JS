import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
export default function Carwala1(){
    const[car,setCar]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/carwala.json")
        .then(info=>info.json())
        .then((data)=>{
            setCar(data)
        })

    },[])

    return (
        <>
        <div className="container-fluid bg-secondary">
        <div className="row space-between">
        {
                car.map((value,index)=>(
                    <div class="card col-lg-3 m-5">
                <img src={value.Pic} class="container-fluid card-img-top pic1" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{value.Brand}</h5>
                  <p class="card-text">{value.Feature}</p>
                  <p class="card-text">{value.Price}</p>
                  <p><StarRatings rating={value.Star} starRatedColor="Gold" starDimension="25px" starSpacing="2px"/></p>
                  <a href="#" class="btn btn-primary">View More!!!</a>
                 
                </div>
                </div>
            ))
        }
        </div>
        </div>
        </>
    );
}