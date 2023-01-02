import React,{useState} from "react";


export default function AddSub() {
    const[increment,setIncrement]=useState(0)

    return (
        <div>
        <h1>{increment}</h1>
        <button onClick={()=>setIncrement(increment+1)}>Increment</button>
        <button onClick={()=>setIncrement(increment-1)}>Decrement</button>
        <button onClick={()=>setIncrement(0)}>Reset</button>
        </div>
    );
}