import counter from './counterReducer.js';
import head from './headReducer.js';
import { combineReducers } from 'redux';

const addReducer = combineReducers({
    counter,
    head
});

export default addReducer;