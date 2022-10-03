import { combineReducers } from 'redux';
import actionReducer from './storeManagement/actionReducer';

const rootReducer = combineReducers({
    productState: actionReducer,
});

export default rootReducer;
