import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react';
var initialstate = {
  counter1 : 0,
  counter2 : 10
};

const reducer = (state,action)=>{
    switch(action.type){
      case 'increment1' : 
        return {...state,counter1:state.counter1+action.value};
      case 'decrement1' : 
        return {...state,counter1:state.counter1-action.value};
      case 'increment2' : 
        return {...state,counter2:state.counter2+action.value};
      case 'decrement2' : 
        return {...state,counter2:state.counter2-action.value};
      case 'reset1' : 
        return {...state,counter1 : action.value};
      case 'reset2' : 
        return {...state,counter2 : action.value};
      
        default : 
        return state;        
    }
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialstate);
  return (<>
      <h1>Counter : {state.counter1}</h1>
      <button onClick={()=>{dispatch({type:'increment1',value:1})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'decrement1',value:1})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'reset1',value:0})}}>Reset</button>
      <br/>
      <h1>Counter : {state.counter2}</h1>
      <button onClick={()=>{dispatch({type:'increment2',value:10})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'decrement2',value:10})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:'reset2',value:0})}}>Reset</button>

   </>);
}

export default App;
