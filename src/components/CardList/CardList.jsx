import React, { useState } from "react";
import './CardList.css';
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const { getData } = require("../db/bd.js");

const foods  = getData();

const CardList = () => {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if(exist) {
            setCartItems(cartItems.map(x => 
                x.id === food.id ? {...exist, quantity: exist.quantity + 1 } : x
            )
            );
        } else {
            setCartItems([...cartItems, {...food, quantity: 1}]);
        }
    };

    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if(exist.quantity === 1) {
            setCartItems(cartItems.filter(x => x.id !== food.id))
        } else {
            setCartItems(cartItems.map(x => 
                x.id === food.id ? {...exist, quantity: exist.quantity - 1 } : x
            )
            );
        }
    };

    return (
        <>
        <h2 className="heading">Заказ еды</h2>
        <Cart cartItems={cartItems}/>
        <div className="cards__container">
        {foods.map(food => {
          return  <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>;
        })}
        </div> 
        </>
    )
}

export default CardList;