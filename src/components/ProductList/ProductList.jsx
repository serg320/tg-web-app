import React from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../hooks/useTelegram";
const { getData } = require("../db/db.js");

const products = getData();

const ProductList = () => {
    
    return (
        <div className={'list'}>
            {products.map(item => (<ProductItem product={item} className={'item'} /> ))}
        </div>
    );
};

export default ProductList;