import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import { requestedURL } from '../urls.js';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {userData} from '../store/userSlice.js';

function Login() {
  const [loginData,setLoginData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = (event)=>{
    const {name,value} = event.target;
    setLoginData({
        ...loginData,
        [name]:value
    });  
  }    
  const handleLogin = async (event)=>{
    event.preventDefault();
    try{
        var result = await axios.post(requestedURL+'/login',loginData);
        if(result.status==201){
            dispatch(userData(loginData));
            navigate("/profile");
        }
    }catch(err){
        console.log("Error while dealing with login in login component");
    }
  }
  return (<>
    <Form className="p-5" onSubmit={handleLogin}>
    <h2>Login Form</h2>
    <br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={getData} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" onChange={getData} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  </>);
}

export default Login;