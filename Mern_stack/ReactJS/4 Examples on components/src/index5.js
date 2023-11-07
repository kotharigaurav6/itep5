import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

class Header extends React.Component{
    render(){
        return <NavBar/>;  
    }
}
class NavBar extends React.Component{
    render(){
        return (<Body/>);    
    }
}
class Body extends React.Component{
    render(){
        return (<>
            <h1>Body Component..!!</h1>
            <h6>This is a Body Component</h6>
        </>);    
    }
}

createRoot(document.getElementById("root")).render(<Header/>);