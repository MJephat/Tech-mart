import React from "react";


function Cart({ cartItems, onClick }) {
    return (
        <div>
            <button onClick={onClick}>Cart ({cartItems.length})</button>
            {cartItems.length > 0 && (
                <div>
                    <h2>Cart</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Cart;