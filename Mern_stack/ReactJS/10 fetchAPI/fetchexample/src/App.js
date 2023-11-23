import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  
  useEffect(()=>{
    setTimeout(()=>{
      setCounter((counter)=> counter+1);
    });
  },[]);

  return <h1>Counter : {counter}</h1>;
}

export default App;

/*
remove strict mode from index.js because it runs components  twice.
here functionality of useEffect is that it runs when component render or when state change.
*/