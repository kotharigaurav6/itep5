import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { requestedURL } from '../urls.js';

const initialState = {
    user_Data : {},
    navShow:"home",
    status : false
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        userData : (state,action)=>{
            state.navShow = "profile";
            console.log("inside slice : ",action.payload);
            state.user_Data = action.payload;
            state.status=true;
        },
        logout : (state)=>{
            state.status=false;
            state.navShow = "home";
        },
        register : async (state,action)=>{
             try{
                var result = await axios.post(requestedURL+'/register',action.payload);
                console.log("result : ",result);
                // needs to set true or false in property of an object in initial state and manage it on component accordingly
            }catch(err){
                console.log("Error in userSlice: ",err);
             }   
        }
    }
});

export const {userData,logout,register} = userSlice.actions;
export default userSlice.reducer;