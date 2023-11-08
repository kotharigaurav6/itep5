import React from 'react';
import {createRoot} from 'react-dom/client';

function FunctionalComponent(props){
    return (<>
        <h2>This is an example of Functional Component</h2>
        <h3>Hey {props.data.name}, your age is {props.data.age}</h3>
    </>);
}
class ClassComponent extends React.Component{
    render(){
        return (<>
            <h2>This is an example of Class Component</h2>        
            <h3>Hey {this.props.data.name}, your age is {this.props.data.age}</h3>
            </>);
    };
}    

var obj1 = {name:"Andrew",age:36};
var obj2 = {name:"Anderson",age:32};

function MainComponent(){
    return (<>
            <FunctionalComponent data={obj1}/>
            <ClassComponent data={obj2}/>
        </>);
}
createRoot(document.getElementById("root")).render(<MainComponent/>);
