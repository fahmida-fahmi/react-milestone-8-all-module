// import React from 'react';

import { addToCart, removerCart } from "../../Utilities/addTocart";

const Cosmetic = (props) => {
    const {id, name, price,eyeColor} = props.cosmetic

    return (
        <div style={{border:'1px solid white', marginBottom:"10px", borderRadius:'15px', padding:'20px'}}>
            <h4>Name: {name}</h4>
            <p>Id: {id}</p>
            <p>Price: {price}</p>
            <p>Eye Color: {eyeColor}</p>
            <button onClick={()=> addToCart(id)}>Add to Cart</button>
            <button onClick={()=> removerCart(id)}>Remove Cart</button>
        </div>
    );
};

export default Cosmetic;