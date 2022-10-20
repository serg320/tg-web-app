import React from 'react';
import './Cart.css';
import Buttonn from '../Buttonn/Buttonn';

function Cart({ cartItems }) {
  
    const totalPrtice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className='cart__container'>
      {cartItems.length == 0 ? "Пусто в корзине" : "Итого :  "}

      <br /> <span className=''>  {cartItems.length == 0 ? '' : " " + totalPrtice.toFixed(2) + ' Р'}</span>
      <Buttonn title={`${cartItems.length == 0 ? '' : 'Заказать'} `} 
      type={'checkout'}
      disable={cartItems.length === 0 ? true : false}/>
    </div>
  )
}

export default Cart
