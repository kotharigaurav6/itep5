import {configureStore} from '@reduxjs/toolkit';
import studSlice from './studSlice.js';

export default configureStore({
    reducer : {
        student : studSlice
    }
});