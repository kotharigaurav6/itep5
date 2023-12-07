// memo and useMemo hook
/*
Memo and useMemo are two ways to optimize the performance of React components by using memoization. Memoization is a technique that caches the results of expensive function calls or component renders, so that the next time the same input is given, the cached result is returned instead of recomputing the value.

The main difference between memo and useMemo is that memo is a higher-order component that wraps another component, while useMemo is a hook that wraps a function. Memo is used to prevent unnecessary re-rendering of a component when its props do not change, while useMemo is used to memoize the return value of a function when its dependencies do not change.

Here are some examples of when to use memo and when to use useMemo:

- Use memo when you have a component that is expensive to render (for example, it has complex calculations or animations) and you want to avoid re-rendering it unless its props change.

- Use useMemo when you have a function that is expensive to call (for example, it has complex calculations or API calls) and you want to avoid calling it unless its dependencies change.
*/

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

   const memoizedComponent = useMemo(()=><Memoized name={name} age={age}/>,[name,age]);
  return (<>
  <h1>Count : {count}</h1>
  <button onClick={()=>{setCount(count+1)}}>Click to Increase</button>
  
  <h1>Memoized Component</h1>
  {memoizedComponent}
  
  <h1>UnMemoized Component</h1>
  <UnMemoized name="Andrew Anderson" age="45"/>
  </>);
}

export default App;
