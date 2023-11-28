import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addStudent} from '../store/studSlice.js';

function Section(){
    const [student,setStudent] = useState({});
    const dispatch = useDispatch();

    const getData = (event)=>{
        const {name,value} = event.target;
        setStudent({
            ...student,
            [name] : value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addStudent(student));
        event.target.reset();
    }
    return (<>
        <div id="divleft">
            <h2>Fill Details</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Username" name="username" onChange={getData}/>
                <input type="email" placeholder="Enter email" name="email" onChange={getData}/>
                <input type="password" placeholder="Enter password" name="password" onChange={getData}/>
                <input type="address" placeholder="Enter Address" name="address" onChange={getData}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </>);
}
export default Section;