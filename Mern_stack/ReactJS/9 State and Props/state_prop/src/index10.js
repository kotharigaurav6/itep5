import React from 'react';
import {createRoot} from 'react-dom/client';

class MainComponent extends React.Component{
   /*
    constructor(){
        super();
        console.log(this);
        console.log(typeof this);
        console.log(this.props);
        console.log(typeof this.props);
       
        this.state = {
            name : "Andrew Anderson",
            salary : 45678,
            address : "Indore, Madhya Pradesh"    
        }
    }
    */
    constructor(pro){
        super(pro);
        console.log(this);
        console.log(typeof this);
        console.log(this.props);
        console.log(typeof this.props);
       
        this.state = {
            // name : "Andrew Anderson",
            name : this.props.name,
            salary : 45678,
            address : "Indore, Madhya Pradesh"    
        }
    }
    render(){
        return (<address>
            <h1>Full Name : {this.state.name}</h1>
            <h2>Salary : {this.state.salary}</h2>
            <h3>Address : {this.state.address}</h3>
        </address>);
    }
}
createRoot(document.getElementById("root")).render(<MainComponent name="Simran"/>);

