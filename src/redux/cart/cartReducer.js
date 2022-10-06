/* eslint-disable no-case-declarations */
export const ADD_TO_CART = 'ADD_TO_CART';

const initialState = [];

export const addtoCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const isAvilableInCart = state.find((pd) => pd.id === action.payload.id);
            if (isAvilableInCart) {
                return state.map((product) => {
                    if (product.id === isAvilableInCart.id) {
                        return {
                            ...isAvilableInCart,
                            quantity: isAvilableInCart.quantity + 1,
                        };
                    }
                    return product;
                });
            }

            return [...state, { ...action.payload, quantity: 1 }];

        default:
            return state;
    }
};

export default cartReducer;
