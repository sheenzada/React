import { useContext } from "react";
import CartContext from "../context/CartContext";


const stripePromise = loadStrip ('your-strip-key');

export default function Checkout() {
    const {cart} = useContext(CartContext);

    const handlePayment = async () => {
        const stripe = await stripePromise;

        const response = await fetch('api/payment' , {
            method: 'Post' , 
            body: JSON.stringify(cart),
        });

        const {client_secret} = await response.json ();
        const {error} = await stripe.confirmCardPayment(client_secret , {
            payment_method: {card :  card_element },
        });
        if(error) console.error(error);
    };

    return (
        <div className="p-8">
            <h2>Checkout</h2>
            <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded">
                Pay Now
            </button>
        </div>
    );
}