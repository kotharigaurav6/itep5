import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import './style1.css';

function FunComp1(){
    return (<div id="headingBackground">
        <h1>This is an example of FunComp1</h1>
        <span>This is span tag of functional component</span>
        <br/>
    </div>);
}
function FunComp2(){
    return (<div id="headingBackground1">
        <h1>This is an example of FunComp2</h1>
        <span>This is span tag of functional component</span>
    </div>);
}

createRoot(document.getElementById("root1")).render(<FunComp1/>);
createRoot(document.getElementById("root2")).render(<FunComp2/>);