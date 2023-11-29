import { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {addStudent} from '../store/studSlice.js';

function Section(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');
    
    var obj = {
        username:'',
        email:'',
        password:'',
        address:''
    }
    const index = useSelector(state=>state.student.index);
   
    const selectedStudent = useSelector(state=>state.student.selectedStudent);
    var formData = (index==-1)?obj:selectedStudent;
  
    const dispatch = useDispatch();

    const handleSubmit = (event)=>{
        event.preventDefault();
        var student={username,email,password,address};
        /*
        console.log("---------",addStudent(student));
        on calling addStudent(student), then control goes to export const {addStudent,updateStudent,deleteStudent} = studSlice.actions;
        where action creators will return the type and payload (say as action object), which then pass to the dispatch function to add it in the store.
        */
        //console.log("check");
        
        //console.log("####",dispatch(addStudent(student)));
        dispatch(addStudent(student));
        // dispatch function pass object received from addStudent to reducer (syudSlice/addStudent)
       
        event.target.reset();
    }
    return (<>
        <div id="divleft">
            <h2>Fill Details</h2>
            <form action="" onSubmit={handleSubmit}>
                
                <input defaultValue={formData.username} type="text" placeholder="Enter Username" name="username" onChange={(event)=>{setUsername(event.target.value)}}/>
                
                <input defaultValue={formData.email} type="email" placeholder="Enter email" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
                
                <input defaultValue={formData.password} type="password" placeholder="Enter password" name="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                
                <input defaultValue={formData.address} type="address" placeholder="Enter Address" name="address" onChange={(event)=>{setAddress(event.target.value)}}/>
                
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </>);
}
export default Section;