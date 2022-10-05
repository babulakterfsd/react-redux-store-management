/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
const stockChecker = (store) => (next) => (action) => {
    next(action);
};

export default stockChecker;
