import React from "react";



export default function Date1(){
        function fun()
        {
            let dat=document.getElementById("dat").value;
            var date1 = new Date(dat);
            date1. setDate(date1. getDate()+90);
            document.getElementById("t1").innerHTML=date1.getDate()+"/"+date1.getMonth()+"/"+date1.getFullYear();
        }
        return(
        <div>
            <input type="date" id="dat" name="Date"/>
            <button onClick={fun}>Calculate Date</button>
            <h1 id="t1"></h1>
        </div>
    );
}