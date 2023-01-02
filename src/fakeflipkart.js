import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './fakeflipkart.css';


export default function FakeFlipkart(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <>
        <div className="container-fluid bg-warning">
        <div className="row space-between">
        {products.map((value,index)=>(
             
                <div class="card col-lg-3 m-5 shadow cd">
                    <img src={value.image} class="container-fluid card-img-top p-5" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">Category: <b>{value.category}</b></p>
                        <p class="card-text"><StarRatings rating={value.rating.rate}  starRatedColor="Gold" starDimension="25px" starSpacing="2px"/></p>
                        <p class="card-text"><b>$ {value.price}</b></p>
                        <p class="card-text">{value.count}</p>
                        
                </div>
                <Link to={`/details/${value.id}`}>< a class="btn btn-primary m-4">View More....</a></Link>
                
                </div>
            
               
        ))}
         </div>
        </div>
        </>
    );
}