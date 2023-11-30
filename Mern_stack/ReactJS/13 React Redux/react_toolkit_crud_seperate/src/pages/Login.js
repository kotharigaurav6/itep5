import {useEffect, useState} from 'react';
import {loginStudent} from '../store/studSlice.js';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Login(){
    const [credentials,setCredential] = useState({});
   // const loginStatus = useSelector(state=>state.student.loginStatus);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData=(event)=>{
        const {name,value} = event.target;
        setCredential({
            ...credentials,
            [name]:value
        });
    }   
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(loginStudent(credentials));
        //console.log("login status : ",loginStatus);
        // still gets false , if we have true credentials
        navigate('/viewStudent');
        event.target.reset();
    }
   
    return (<>
           <center>
                <h2>Login Form</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input name="email" type="email" placeholder="Enter Email" onChange={getData}/><br/>
                    <input name="password" type="password" placeholder="Enter Password" onChange={getData}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
           </center> 
    </>);
}

export default Login;

