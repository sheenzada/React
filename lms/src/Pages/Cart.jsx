import { useContext, useState } from "react";
import CartContext from "../context/CartContext";


export default function Cart () {
    const {cart , removeFromCart } = useContext(CartContext);

    return (
        <div className="p-8">
            <h2>Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                    <p>{item.name}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}