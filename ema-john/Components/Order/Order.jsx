import React from 'react';
import './Order.css'

const Order = (props) => {
    const {cart} = props
    console.log(cart);
    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for(const price of cart){
        price.quantity = price.quantity || 1
        quantity = quantity + price.quantity 
        totalPrice = totalPrice + price.price * price.quantity
        totalShipping = totalShipping + price.shipping
        console.log(totalPrice);
    }
    const tax = totalPrice*10/100
    // const totalPrice = cart.price
    // const dataFrom LocalStorage = () =>{

    // }

    const grandTotal =  totalPrice +totalShipping + tax
    return (
        <div className='order'>
            <div className="order-content">
                <h2> Order summary</h2>
                <p>Selected Item: ${quantity}</p> 
                <p>Total Price: ${totalPrice}</p> 
                <p>Total Shipping Charge: ${totalShipping}</p> 
                <p>tax: ${tax.toFixed(2)}</p> 
                <p>Grand Total: ${grandTotal.toFixed(2)}</p> 
            </div>
        </div>
    );
};

export default Order;