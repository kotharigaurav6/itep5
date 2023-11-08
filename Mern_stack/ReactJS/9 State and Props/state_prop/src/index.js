import React from 'react';
import {createRoot} from 'react-dom/client';
import {useState} from 'react';

function MainComponent(){
    const [title,setTitle] = useState("Counter");
    const [count,setCount] = useState(0);
    
    var changeTitle = ()=>{
        setTitle("Counting");
    }
    var increment = ()=>{
        setCount(count+1);
    }
    function decrement(){
        if(count==0)
            setCount(0);
        else
            setCount(count-1);    
    }
    function reset(){
        setCount(0);
    }
    return (<>
         <h1>{title} : {count}</h1>
            <button onClick={()=>{increment()}}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={changeTitle}>Change Title</button>
    </>);
}
createRoot(document.getElementById("root")).render(<MainComponent/>);

