import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  
  useEffect(()=>{
    setTimeout(()=>{
      setCounter((counter)=> counter+1);
    },2000);
  });

  return <h1>Counter : {counter}</h1>;
}

export default App;
