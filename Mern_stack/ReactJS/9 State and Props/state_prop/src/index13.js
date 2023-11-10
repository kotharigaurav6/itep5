import React from 'react';
import {createRoot} from 'react-dom/client';
import {useState} from 'react';

function FunctionalComponent(){
    const [age,setAge] = useState(0); // here we are using useState hook
    var changeAge=()=>{
        setAge(300);
    }
    return (<>
        <h1>Age : {age}</h1>
        <input type="submit" value="Change Age" onClick={()=>{setAge(100)}}/>
        <input type="submit" value="Change Age" onClick={changeAge}/>
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
        <input type="submit" value="Change Age" onClick={()=>{this.setState({age:400})}}/>
        <input type="submit" value="Change Age" onClick={this.changeAge}/>           
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

