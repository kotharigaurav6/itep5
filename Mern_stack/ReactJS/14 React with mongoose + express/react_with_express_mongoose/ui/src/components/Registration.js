import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import axios from 'axios';
import {requestedURL} from '../urls.js';
import {useNavigate} from 'react-router-dom';

function Registration() {
  const [userData,setUserData] = useState({});
  const navigate = useNavigate();  
  const getData = (event)=>{
    const {name,value} = event.target;
    setUserData({
        ...userData,
        [name]:value
    });
  }  

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try{
        var result = await axios.post(requestedURL+'/register',userData);
        console.log(result);
        /*
         if(result.data.status==true){
            navigate('/login');        
        }    
        */ 
        if(result.status==201){
            navigate('/login');        
        }    
    }catch(err){
        console.log(err);
    }
  }
  return (<>
    <Form className="p-5 col-5" onSubmit={handleSubmit}>
    <h2>Registration Form</h2>
    <br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" onChange={getData} type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={getData} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" onChange={getData} type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" onChange={getData} type="text" placeholder="Enter address" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  </>);
}

export default Registration;