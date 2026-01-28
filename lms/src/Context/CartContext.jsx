const { createContext, useState } = require("react");


const CartContext = createContext ();


export function CartProvider ({ childern }){
const [cart, setCart] =  useState([]);

const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
};

const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id  !== id));
};

return (
    <CartContext.Provider value={{ cart , addToCart, removeFromCart }}>
        {childern}
    </CartContext.Provider>
);
}

export default CartContext;