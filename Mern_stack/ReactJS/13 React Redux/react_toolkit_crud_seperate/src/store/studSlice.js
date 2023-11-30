import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    students : [],
    selectedStudent : {},
    index : -1,
    loginStatus : false,
    navShow : "home"
}

const studSlice = createSlice({
    name : 'studSlice',
    initialState,
    reducers : {
        addStudent : (state,action)=>{
            console.log(action);
            if(state.index==-1){
                state.students = [...state.students,action.payload];
          //      state.selectedStudent={};
            }else{
                state.students.splice(state.index,1,action.payload);
                state.index=-1;
            }    
        },
        loginStudent : (state,action)=>{
          // console.log("###",action);
            var res = state.students.filter((student)=>{
                return student.email==action.payload.email && student.password == action.payload.password;
            });
            console.log("length : "+res.length);
            if(res.length!=0){
                state.loginStatus=true;
                state.navShow="login";
            }
            else
                state.loginStatus=false;
        },
        logout : (state)=>{
            state.navShow="home";
            state.loginStatus=false;
        },
        updateStudent : (state,action)=>{
            
            console.log(action);
            console.log(action.payload);
            console.log(action.payload.index);
          
            state.selectedStudent = action.payload.stud;
            state.index = action.payload.index;             
        },
        deleteStudent : (state,action)=>{
            console.log(action.payload);
            state.students.splice(action.payload,1);
        }
    }
});

export const {addStudent,updateStudent,deleteStudent,loginStudent,logout} = studSlice.actions;
// above line will creates action creators automatically
export default studSlice.reducer;