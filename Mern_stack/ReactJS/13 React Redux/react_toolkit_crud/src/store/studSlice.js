import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    students : [],
    selectedStudent : {},
    i : -1
}

const studSlice = createSlice({
    name : 'studSlice',
    initialState,
    reducers : {
        addStudent : (state,action)=>{
            state.students = [...state.students,action.payload];
        },
        updateStudent : (state,action)=>{
            state.selectedStudent = action.payload;
        },
        deleteStudent : (state)=>{

        }
    }
});

export const {addStudent,updateStudent,deleteStudent} = studSlice.actions;
export default studSlice.reducer;