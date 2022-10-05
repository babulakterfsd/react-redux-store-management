const initialState = [
    {
        id: '1',
        title: 'Asus Vivobook x515MA',
        price: 35500,
        quantity: 10,
    },
    {
        id: '2',
        title: 'DEll Inspiron 15 3000',
        price: 93000,
        quantity: 7,
    },
    {
        id: '3',
        title: 'Canon EOS 1500D',
        price: 65000,
        quantity: 12,
    },
];

const productReducer = (action, state = initialState) => state;

export default productReducer;
