import { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {addStudent} from '../store/studSlice.js';

function Section(){
    const [student,setStudent] = useState({});
    const selectedStudent = useSelector(state=>state.student.selectedStudent);
    const index = useSelector(state=>state.student.index);
    console.log("###########",selectedStudent);
    const dispatch = useDispatch();
    useEffect(()=>{
        setStudent(selectedStudent);
    },[selectedStudent]);

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
       setStudent({});
        event.target.reset();
    }
    return (<>
        <div id="divleft">
            <h2>Fill Details</h2>
            <form action="" onSubmit={handleSubmit}>
                <input value={student.username} type="text" placeholder="Enter Username" name="username" onChange={getData}/>
                <input value={student.email} type="email" placeholder="Enter email" name="email" onChange={getData}/>
                <input value={student.password} type="password" placeholder="Enter password" name="password" onChange={getData}/>
                <input value={student.address} type="address" placeholder="Enter Address" name="address" onChange={getData}/>
                <input type="submit" value={index==-1 ? "Submit" : "Update"}/>
            </form>
        </div>
    </>);
}
export default Section;




