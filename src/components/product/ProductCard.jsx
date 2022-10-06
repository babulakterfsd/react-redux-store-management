import React from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../redux/cart/cartReducer';

function ProductCard({ product }) {
    const { title, price, quantity } = product;
    const dispatch = useDispatch();

    const handleAddToCart = (selectedProduct) => {
        dispatch(addtoCart(selectedProduct));
    };

    return (
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                    <div className="flex">
                        <p className="mr-4">{title}</p>
                        {quantity > 0 ? (
                            <span>{`(${quantity})`}</span>
                        ) : (
                            <span className="py-1 px-3 bg-red-500 rounded text-white">
                                Out of Stock
                            </span>
                        )}
                    </div>
                    <p className="text-gray-400 text-base">TK {price}</p>
                </div>
                <div className="text-lg font-semibold">
                    <button
                        type="button"
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                        onClick={() => handleAddToCart(product)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
