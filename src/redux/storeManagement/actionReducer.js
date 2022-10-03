/* eslint-disable default-param-last */

import BUY from './actionTypes';

const initialState = {
    value: 0,
};

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY:
            return {
                ...state,
                value: state.value + action.payload,
            };

        default:
            return state;
    }
};
export default actionReducer;
