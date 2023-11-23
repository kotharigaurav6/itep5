// here data comes from file.

import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Display from './Display.js';
function App() {
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [address,setAddress] = useState();
  const [student,setStudent] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:3000/profile")
      .then(response => response.json())
        .then((data) => {setStudent(data)})
          .catch((error)=>{
            console.log("Error : "+error);
          });
  },[]);

  function saveStudent(event){
    event.preventDefault();
    var obj = {username,email,password,address};
    console.log(obj);
    var stud = [...student,obj];
    fetch("http://localhost:3000/profile",{
      method:'POST',
      headers :{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(stud)
    });

    event.target.reset();
    setStudent(stud); 
  }

  return (<>
  <div style={{width:"25%",float:"left"}}>
    <center><h1>Example of FetchAPI using Post Method</h1>
    <h3>Fill Details</h3>
    <form action="" onSubmit={saveStudent}>
    <input type="text" 
    placeholder = "Enter Username"
    onChange={(event)=>{
      setUsername(event.target.value);
    }}/>  

    <input type="email" 
    placeholder = "Enter Email"
    onChange={(event)=>{
      setEmail(event.target.value);
    }}/>  

    <input type="password" 
    placeholder = "Enter Password"
    onChange={(event)=>{
      setPassword(event.target.value);
    }}/>  

    <input type="text" 
    placeholder = "Enter Address"
    onChange={(event)=>{
      setAddress(event.target.value);
    }}/>  

    <input type="submit"
    value="Submit Details"  
    />  
    </form>
    </center>
    </div>   
    <div style={{width:"72%",height:"44px",float:"left"}}>
      <Display list={student}/>
    </div>
    </>);
}

export default App;
