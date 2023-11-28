import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    counterTitle : "Demo Example of Redux Toolkit",
    tagline : "Its an example of RKT",
    count:0
}

const userSlice = createSlice({
    name : 'UserSlice',
    initialState,
    reducers : {
       increment : (state)=>{
        state.count += 1;
       }, 
       decrement : (state)=>{
        state.count -= 1;
       },
       reset : (state)=>{
            state.count=0;
       },
       incrementByThree : (state,action)=>{
            state.count+=action.payload;
       },
       setTitleTag : (state,action)=>{
            state.tagline=action.payload;
       }
    }
});

export const {increment,decrement,reset,incrementByThree,setTitleTag} = userSlice.actions;
export default userSlice.reducer;