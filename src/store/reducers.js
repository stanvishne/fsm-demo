import { combineReducers } from 'redux';

function data(state = [], action) {
    switch (action.type) {
        case 'DATA_LOADED':
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers({
    data
});
