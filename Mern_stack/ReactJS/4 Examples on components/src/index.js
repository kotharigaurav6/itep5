import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import  './style.css';

class ClassComponent extends React.Component{
    render(){
        return (<>
            <p>ClassComponent returned by FormComponent</p>
        </>);
    }
}
function FormComponent(){
    return <ClassComponent/>;
}

createRoot(document.getElementById("root")).render(<FormComponent/>);

