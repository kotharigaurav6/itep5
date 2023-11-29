import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
const initialState = {
    students : [],
    selectedStudent : {},
    index : -1
}

const studSlice = createSlice({
    name : 'studSlice',
    initialState,
    reducers : {
        addStudent : (state,action)=>{
            console.log(action);
            if(state.index==-1){
                state.students = [...state.students,action.payload];
                state.selectedStudent={};
            }else{
                state.students.splice(state.index,1,action.payload);
                state.index=-1;
            }    
        },
        updateStudent : (state,action)=>{
            
            console.log(action);
            console.log(action.payload);
            console.log(action.payload.index);
          
            state.selectedStudent = action.payload.stud;
            state.index = action.payload.index;             
  
        },
        deleteStudent : (state,action)=>{
            state.students.splice(action.payload,1);
        }
    }
});

export const {addStudent,updateStudent,deleteStudent} = studSlice.actions;
// above line will creates action creators automatically
export default studSlice.reducer;