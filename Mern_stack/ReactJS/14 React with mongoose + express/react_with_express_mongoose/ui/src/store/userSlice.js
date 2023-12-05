import {createSlice} from '@reduxjs/toolkit';
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
        }
    }
});

export const {userData,logout} = userSlice.actions;
export default userSlice.reducer;