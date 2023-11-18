import {createRoot} from 'react-dom/client';
import React, {useState,useRef} from 'react';

function FunctionalComponent(){
    var userDetails = {};
    const [user,setDetails] = useState({});

    const showDetails=()=>{
        setDetails(userDetails);
    }    
    return(<>
        <h1>Functional Component</h1>
        <input 
        type='text'
        placeholder='Enter Username'
        name='username'
        onChange={
            (event)=>{
               // console.log(event.target.value);
                userDetails = {...userDetails,[event.target.name]:event.target.value}
            }
        }/>
        <br/>
        <input 
        type='email'
        placeholder='Enter Email'
        name='email'
        onChange={
            (event)=>{
              //  console.log(event.target.value);
              userDetails = {...userDetails,[event.target.name]:event.target.value}
            }
        }/>
        <br/>
        <input 
        type='password'
        placeholder='Enter Password'
        name='password'
        onChange={
            (event)=>{
              //  console.log(event.target.value);
              userDetails = {...userDetails,[event.target.name]:event.target.value}
            }
        }/>
        <br/>
        <input 
        type='submit'
        onClick={showDetails}
        />

    <h3>{user.username ? `UserName : ${user.username}` : ''}</h3>
    <h3>{user.email ? `Email : ${user.email}` : ''}</h3>
    <h3>{user.password ? `Password : ${user.password}` : ''}</h3>

    </>);
}


function MainComponent(){
    return(<>
        <FunctionalComponent/>
    </>)
}
createRoot(document.getElementById("root")).render(<MainComponent/>);


