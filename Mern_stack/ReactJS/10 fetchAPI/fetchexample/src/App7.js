/*
Install JSON Server
-------------------
npm install -g json-server


Create a db.json file with some data (automatically)

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

Start JSON Server
-------------------
json-server --watch db.json

-------------or---------------

npx json-server --watch db.json

*/
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [address,setAddress] = useState();
  const [student,setStudent] = useState([]);
  
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
    </>);
}

export default App;
