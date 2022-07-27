import React from "react";
import { useState,useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal=()=>{
    const[url,seturl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();

    useEffect(()=>{
        fetch (url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals)
        })
    },[])
    
    return(
        <>
        <div className="main">
            <div className="heading">
                <h1>Search Your Recipe.</h1>
                <h4></h4>
            </div>
        <div className="searchBox">
            <input type="search" className="search-bar"/>
        </div>
        <div className="container">
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        <MealItem/>
        </div>
        <div className="indexcontainer">
        <RecipeIndex/>
        </div>
        </div>
        </>
    )
}
export default Meal;