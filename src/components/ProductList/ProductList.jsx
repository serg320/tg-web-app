import React, { useState } from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../hooks/useTelegram";
import { useCallback, useEffect } from "react";
import axios from "axios";
const { getData } = require("../db/db.js");

const products = getData();
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();
    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        axios.post('http://92.63.192.97:8150/web-data', 
            { answer: 42 });
        //axios({
        //    method: 'post',
       //     url: 'http://92.63.192.97:8150/web-data',
        //    headers: {
        //        'Content-Type': 'application/json',
       //     },
       //     data: JSON.stringify(data)
      //    });
        fetch('http://92.63.192.97:8150/web-data', {
           method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])
    
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }
    
    return (
        <div className={'list'}>
            {products.map(item => (
            <ProductItem 
            product={item} 
            onAdd={onAdd} 
            className={'item'} 
            />
             ))}
        </div>
    );
};

export default ProductList;