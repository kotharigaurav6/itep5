import React from 'react';
import {createRoot} from 'react-dom/client';
import {useState} from 'react';

function FunctionalComponent(){
    const [age,setAge] = useState(0); // here we are using useState hook
    return (<>
        <h1>Age : {age}</h1>
        <input type="text"
        placeholder='Enter Age'
        onChange={
            (event)=>{
                console.log(event.target.value);
                setAge(event.target.value)
            }
        }/>
    </>);
}

class ClassComponent extends React.Component{
    state={
        age : 0
    }
    changeAge = ()=>{
        this.setState({age : 300});
    }
    render(){
        return (<>
        <h1>Age : {this.state.age}</h1>
        <input type="text"
        placeholder='Enter Age'
        onChange={
            (event)=>{
                console.log(event.target.value);
                this.setState({age:event.target.value})
            }
        }/>
        </>);
    }
}

function MainComponent(){
    return(<>
        <FunctionalComponent/>
        <ClassComponent/>
    </>)
}
createRoot(document.getElementById("root")).render(<MainComponent/>);

