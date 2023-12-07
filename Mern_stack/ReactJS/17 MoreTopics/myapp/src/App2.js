// The React context API is a fast way of avoiding prop drilling  | with useContext hook
import logo from './logo.svg';
import './App.css';
import {useState,createContext,useContext} from 'react';
let context = createContext(null);

function App() {
  const [fname,setFname] = useState("Andrew andy");
  const [lname,setLname] = useState("Anderson");
  return (<context.Provider value={{fname,lname}}>
    <h1>This is Parent Component</h1>
    <ChildA/>
  </context.Provider>);
}

function ChildA(){
  return(<>
    <h1>This is child A</h1>
    <ChildB/>   
  </>);
}
function ChildB(){
  return(<>
    <h1>This is child B</h1>
    <ChildC/>   
  </>);
}
function ChildC(){
  const {fname,lname} = useContext(context);
  return(<>
    <h1>This is child C</h1>
    <h1>First Name : {fname}</h1>
    <h1>Last Name : {lname}</h1>
  </>);
}

export default App;
