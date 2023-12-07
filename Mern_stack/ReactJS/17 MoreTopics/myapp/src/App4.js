// memo and useMemo hook
import logo from './logo.svg';
import './App.css';
import {useState,useMemo,memo} from 'react';

const Memoized = memo((props)=>{
  console.log(`Hello ${props.name}, your age is ${props.age}`);
  return (<>
    <h2>Hello {props.name}, your age is {props.age}</h2>
  </>);
})

function UnMemoized(props){
  console.log(`Hello ${props.name}, your age is ${props.age}`);
  return (<>
    <h2>Hello {props.name}, your age is {props.age}</h2>
  </>);
}

function App() {
  const [count,setCount] = useState(0);
  //console.log("Hii");
const name = "Mathew Math";
const age = 50;

  return (<>
  <h1>Count : {count}</h1>
  <button onClick={()=>{setCount(count+1)}}>Click to Increase</button>
  
  <h1>Memoized Component</h1>
  <Memoized name="Andrew Anderson andy" age="55"/>
  
  <h1>UnMemoized Component</h1>
  <UnMemoized name="Andrew Anderson" age="45"/>
  </>);
}

export default App;
