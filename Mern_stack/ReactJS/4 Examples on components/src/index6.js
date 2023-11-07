import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import  './style.css';

function FormComponent(){
    return (<>
        <h2>Student Registration Form</h2>
        <input placeholder='Enter Name' name="name" id="name"/> <br/>
        <input placeholder='Enter Email' name="email" id="email"/> <br/>
        <input placeholder='Enter Password' name="password" id="password"/> <br/>
        <input placeholder='Enter Contact' name="contact" id="contact"/> <br/>
        <input type="submit" value="Submit" /> 
        <input type="reset" value="Reset" /> <br/>
    </>);
}

createRoot(document.getElementById("root")).render(<FormComponent/>);