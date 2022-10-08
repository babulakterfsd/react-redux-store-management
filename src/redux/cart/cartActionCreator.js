import ADD_TO_CART from './cartActionType';

const addtoCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export default addtoCart;
