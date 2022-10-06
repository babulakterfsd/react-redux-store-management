export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

const initialState = [
    {
        id: 1,
        title: 'Asus Vivobook x515MA',
        price: 35500,
        quantity: 0,
        stock: 10,
    },
    {
        id: 2,
        title: 'DEll Inspiron 15 3000',
        price: 93000,
        quantity: 0,
        stock: 7,
    },
    {
        id: 3,
        title: 'Canon EOS 1500D',
        price: 65000,
        quantity: 0,
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
