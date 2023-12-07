import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { demo } from '../store/userSlice.js';
import {useDispatch,useSelector} from 'react-redux';

function Registration() {
  const [userData,setUserData] = useState({});
  const navigate = useNavigate();  
  const dispatch = useDispatch();
  const status = useSelector(state=>state.userSlice.status);

  const getData = (event)=>{
    const {name,value} = event.target;
    setUserData({
        ...userData,
        [name]:value
    });
  }  

  if(status==100)
    navigate('/login');
  
    const handleSubmit = async (event)=>{
    event.preventDefault();
    dispatch(demo(userData));
   // navigate('/login');        
  }
    //console.log("hii");
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