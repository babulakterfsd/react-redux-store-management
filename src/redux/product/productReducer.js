import { GET_ALL_PRODUCTS } from './productActionType';

const initialState = [
    {
        id: 1,
        title: 'Asus Vivobook x515MA',
        price: 35500,
        stock: 10,
    },
    {
        id: 2,
        title: 'DEll Inspiron 15 3000',
        price: 93000,
        stock: 7,
    },
    {
        id: 3,
        title: 'Canon EOS 1500D',
        price: 65000,
        stock: 12,
    },
];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return state;

        // case UPDATE_PRODUCTS:

        default:
            return state;
    }
};

export default productReducer;
