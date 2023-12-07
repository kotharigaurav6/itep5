// props drilling : Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.
// example without useContext hook
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [fname,setFname] = useState("Andrew");
  const [lname,setLname] = useState("Anderson");
  return (<>
    <h1>This is Parent Component</h1>
    <ChildA fname={fname} lname={lname}/>
  </>);
}

function ChildA(props){
  return(<>
    <h1>This is child A</h1>
    <ChildB fname={props.fname} lname={props.lname}/>   
  </>);
}
function ChildB(props){
  return(<>
    <h1>This is child B</h1>
    <ChildC fname={props.fname} lname={props.lname}/>   
  </>);
}
function ChildC(props){
  return(<>
    <h1>This is child C</h1>
    <h1>First Name : {props.fname}</h1>
    <h1>Last Name : {props.lname}</h1>
  </>);
}

export default App;
