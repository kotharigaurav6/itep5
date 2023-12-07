import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { requestedURL } from '../urls.js';
import axios from 'axios';
 
const initialState = {
    user_Data : {},
    userList : [],
    navShow:"home",
    status : 0,
    loading:false,
    error:null
};

const demo = createAsyncThunk('userSlice/demo',async(data)=>{
    try{
        var response = await axios.post(requestedURL+'/register',data);
        console.log("in thunk : ",response.status);
        return response;
    }catch(err){
        console.log("Error occured in Thunk",err);
        return err;
    }
});
const demologin = createAsyncThunk('userSlice/demologin',async(data)=>{
    try{
        var response = await axios.post(requestedURL+'/login',data);
        console.log("in thunk : ",response);
        return response;
    }catch(err){
        console.log("Error occured in Thunk login",err);
        return err;
    }
});

const demouserlist = createAsyncThunk('userSlice/demouserlist',async(api_endpoint)=>{
    try{
        var response = await axios.get(api_endpoint);
        console.log("in thunk : ",response);
        return response;
    }catch(err){
        console.log("Error occured in Thunk demouserlist",err);
        return err;
    }
});

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        logout : (state)=>{
            state.status=0;
            state.navShow = "home";
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(demo.pending,(state)=>{
            state.loading=true;
        })
        .addCase(demo.fulfilled,(state,action)=>{
            state.loading=false;
            console.log("status in slice : ",action.payload.status);
            state.error=null;
            state.status=100;
        })
        .addCase(demo.rejected,(state)=>{
            state.loading=false;
            state.error = "Error while dealing with Thunk";
        });

        builder
        .addCase(demologin.pending,(state)=>{
            state.loading=true;
        })
        .addCase(demologin.fulfilled,(state,action)=>{
            state.loading=false;
            console.log("status in slice : ",action.payload.data.obj);
            state.error=null;
            state.navShow = "profile";
            state.user_Data = action.payload.data.obj;
            state.status=200;
        })
        .addCase(demologin.rejected,(state)=>{
            state.loading=false;
            state.error = "Error while dealing with Thunk";
        });

        builder
        .addCase(demouserlist.fulfilled,(state,action)=>{
            state.loading=false;
            console.log("status in slice : ",action.payload.data.userList);
            state.error=null;
            state.navShow = "profile";
            state.userList = action.payload.data.userList;
        })
    }
});
export {demo,demologin,demouserlist};
export const {userData,logout} = userSlice.actions;
export default userSlice.reducer;