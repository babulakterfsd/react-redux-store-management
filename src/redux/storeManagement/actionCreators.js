// action creators

import BUY from './actionTypes';

const buyProduct = (value) => ({
    type: BUY,
    payload: value,
});

export default buyProduct;
