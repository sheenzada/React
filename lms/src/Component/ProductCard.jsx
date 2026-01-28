import { useContext } from "react";
import CartContext from "../context/CartContext";


export default function ProductCard ({ product }) {
    const { addToCart} = useContext(CartContext);

    return (
        <div className="border p-4 rounded">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
}