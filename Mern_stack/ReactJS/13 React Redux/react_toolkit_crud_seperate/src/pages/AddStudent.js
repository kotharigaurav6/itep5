import { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {addStudent} from '../store/studSlice.js';
import {Navigate, useNavigate} from 'react-router-dom';

function AddStudent(){
    const [student,setStudent] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
        const {name,value} = event.target;
        setStudent({
            ...student,
            [name] : value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        /*
        console.log("---------",addStudent(student));
        on calling addStudent(student), then control goes to export const {addStudent,updateStudent,deleteStudent} = studSlice.actions;
        where action creators will return the type and payload (say as action object), which then pass to the dispatch function to add it in the store.
        */
        //console.log("check");
        
        //console.log("####",dispatch(addStudent(student)));
        dispatch(addStudent(student));
        // dispatch function pass object received from addStudent to reducer (syudSlice/addStudent)
        navigate('/viewStudent');
        event.target.reset();
    }
    return (<>
        <div><center>
            <h2>Fill Details</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Username" name="username" onChange={getData}/>
                <input type="email" placeholder="Enter email" name="email" onChange={getData}/>
                <input type="password" placeholder="Enter password" name="password" onChange={getData}/>
                <input type="address" placeholder="Enter Address" name="address" onChange={getData}/>
                <input type="submit" value="Submit"/>
            </form>
        </center></div>
    </>);
}
export default AddStudent;




