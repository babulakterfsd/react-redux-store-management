import React from 'react';
import CartItems from './CartItems';
import Total from './Total';

function Cart() {
    return (
        <div className="w-96">
            <CartItems />
            <Total title="Selected Product" amount={0} />
            <Total title="Total Price" amount={0} />
        </div>
    );
}

export default Cart;
