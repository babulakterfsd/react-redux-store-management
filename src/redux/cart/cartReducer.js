/* eslint-disable no-case-declarations */
import ADD_TO_CART from './cartActionType';

const initialState = [];

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
