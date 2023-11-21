/*
Note :  it did render twice. This is because, in the index.js file, it uses React.StrictMode.

    According to this documentation:

    Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

        Class component constructor, render, and shouldComponentUpdate methods

        Functions passed to useState, useMemo, or useReducer

This is usually to help spot side effects only in the development environment. It does not apply to a production environment.

So if you don't want it to render twice, simply remove the <React.StrictMode> </ React.StrictMode> in the index.js file and it'll work normally.
*/
import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from 'react';

function App() {
  const [name,setUsername] = useState('');
  const [fnum,setFNumber] = useState(0);
  const [lnum,setLNumber] = useState(0);
  const [result,setResult] = useState(0);
  //addition(fnum,lnum);

  // Call useCallback at the top level of your component to cache a function definition between re-renders

  var res = useCallback(()=>{
    setResult(addition(fnum,lnum));
  },[fnum,lnum]); 

  function addition(fnum,lnum){
    console.log("statement executes");
    return parseInt(fnum)+parseInt(lnum);
  }

  return (<>
    <h1>Fill Details</h1>
    <input type="text" onChange={(event)=>{setUsername(event.target.value)}} placeholder='Enter Username' name="name"/> <br/>
    <input type="number" onChange={(event)=>{setFNumber(event.target.value)}} placeholder='Enter First Number' name="fnum"/> <br/>
    <input type="number" onChange={(event)=>{setLNumber(event.target.value)}} placeholder='Enter Last Number' name="lnum"/> <br/>
    <input type="submit" onClick={res} value="Get Result"/>    
   <h1>Result : {result}</h1>
   </>);
}

export default App;
