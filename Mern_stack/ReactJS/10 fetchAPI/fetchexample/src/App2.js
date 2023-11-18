import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [counter,setCounter] = useState(-1);
  
  useEffect(()=>{
    setTimeout(()=>{
      setCounter((counter)=> counter+1);
    });
  },[]);

  return <h1>Counter : {counter}</h1>;
}

export default App;
