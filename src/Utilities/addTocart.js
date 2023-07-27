const addToCart = (id) => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart')
    console.log(storedCart);
    if(storedCart){

        shoppingCart = JSON.parse(storedCart)
    }
    else{
        shoppingCart = {}
    }
    const quantity = shoppingCart[id]
    console.log(quantity);

    if(quantity){
        // const item = parseInt(quantity) + 1
        const item = + quantity + 1
        shoppingCart[id] = item
        // localStorage.setItem('shopping-cart',item)
    }
    else{
        shoppingCart[id] = 1
        console.log(shoppingCart);
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removerShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

const removerCart = id =>{
    const shoppingItem = localStorage.getItem('shopping-cart')
    console.log(shoppingItem);
    if(shoppingItem){
        const shoppingItemParse = JSON.parse(shoppingItem)
        console.log(shoppingItemParse);
        if(id in shoppingItemParse){

            delete shoppingItemParse[id]
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingItemParse))

            console.log(delete shoppingItemParse[id]);
        }
        else{
            console.log('no existence');
        }
    }
}

const getTotalPrice = products =>{
    const getTotal = (prev, curr) => prev+ curr.price
    const reducer = products.reduce(getTotal, 0)
    return reducer

}
export {
    addToCart,
    removerCart,
    removerShoppingCart,
    getTotalPrice as getTotal
    }