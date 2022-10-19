import React, { useState } from "react";
import './CardList.css';
import Card from "../Card/Card";

const { getData } = require("../db/bd.js");

const foods  = getData();

const CardList = () => {
    return (
        <div className="cards__container">
        {foods.map(food => {
          return  <Card food={food} key={food.id}/>
        })}
        </div> 
    )
}

export default CardList;