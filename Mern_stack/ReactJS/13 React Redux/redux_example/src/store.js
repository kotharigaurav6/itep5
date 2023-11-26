import { createStore } from "redux";
import addReducer from './reducers/index.js';
export default createStore(addReducer);