import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import  './style.css';
function TextField(){
    return (<>
        <input placeholder='Enter Text'/> <br/>
    </>);
}
function FormComponent(){
    return (<>
        <h2>Student Registration Form</h2>
        <TextField/>
        <TextField/>
        <TextField/>
        <TextField/>
        
        <input type="submit" value="Submit" /> 
        <input type="reset" value="Reset" /> <br/>
    </>);
}

createRoot(document.getElementById("root")).render(<FormComponent/>);