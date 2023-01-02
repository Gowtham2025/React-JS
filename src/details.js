import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import StarRatings from "react-star-ratings";



export default function Details2(){
    const[products,setProducts] = useState([])
    const{id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return(
        <>
        <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src={products.image} className="container-fluid p-5" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{products.title}</h5>
                        <p class="card-text">Category: <b>{products.category}</b></p>
                        <p class="card-text text-justify">{products.description}</p>
                        <p class="card-text"><b>$ {products.price}</b></p>
                        {/* <p class="card-text"><StarRatings rating={products.rating.rate}  starRatedColor="Gold" starDimension="25px" starSpacing="2px"/></p> */}
                        <p class="card-text">{products.count}</p>
                        <button className="btn btn-warning m-5">Add to cart</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    </div>
                </div>
                </div>

        </>
    );
}