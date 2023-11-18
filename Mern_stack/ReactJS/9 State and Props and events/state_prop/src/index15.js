import React, { createRef } from 'react';
import {createRoot} from 'react-dom/client';
import {useState,useRef} from 'react';

function FunctionalComponent(){
    const age = useRef(); // here useRef is also a hook
    const [ageValue,setAge] = useState(0); // here we are using useState hook
    var changeAge = ()=>{
        setAge(age.current.value);
    }
    return (<>
        <input type="text"
            placeholder='Enter Age'
            ref = {age}
        />
        <input type="submit"
            value="GetAge" 
            onClick={changeAge}
        />
        {/* Here type is text , so 0 age is considered in string */}
       <h1>{ageValue ? `Age : ${ageValue}` : ''}</h1>
    </>);
}

class ClassComponent extends React.Component{
    age = createRef();
    state={
        ageValue : 0
    }
    changeAge = ()=>{
        this.setState({ageValue : this.age.current.value});
    }
    render(){
        return (<>
        <input type="text"
            placeholder='Enter Age'
            ref = {this.age}
        />
        <input type="submit"
            value="GetAge" 
            onClick={this.changeAge}
        />
       <h1>{this.state.ageValue ? `Age : ${this.state.ageValue}` : ''}</h1>

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

