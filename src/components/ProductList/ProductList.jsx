import React from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem.jsx";
import { useTelegram } from "../hooks/useTelegram.js";
const { getData } = require("../db/db.js");

const products = [
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
    {id: '34', title: 'sdfhkhsjfd', price: '12', description: 'jkfdhg'},
];

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

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