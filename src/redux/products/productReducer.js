const initialState = {
    products: [
        {
            id: 1,
            title: 'Asus Vivobook x515MA',
            price: 35500,
            quantity: 10,
            stock: 10,
        },
        {
            id: 2,
            title: 'DEll Inspiron 15 3000',
            price: 93000,
            quantity: 7,
            stock: 7,
        },
        {
            id: 3,
            title: 'Canon EOS 1500D',
            price: 65000,
            quantity: 12,
            stock: 12,
        },
    ],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productReducer;
