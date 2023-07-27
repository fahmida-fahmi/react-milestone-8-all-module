import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/product';
import Order from '../Order/Order';
import { addToDb, getShoppingCart } from '../../utilities/local';


const Shop = () => {
    const [products,setProducts] =  useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart()
        const saveCart = []
        for(const id in storedCart){
            const addProduct = products.find(product => product.id === id)
            console.log(addProduct);
            if(addProduct){
                const quantity = storedCart[id]
                addProduct.quantity =  quantity
                saveCart.push(addProduct)
            }
        }
        setCart(saveCart)
    },[products])
    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container" >
                {
                    products.map(product => 
                        <Product 
                        product = {product}
                        addToCart = {addToCart}
                        key = {product.id}
                        ></Product>
                        )
                }
            </div>
            
                <Order
                cart ={cart}
                ></Order>
        </div>
    );
};

export default Shop;