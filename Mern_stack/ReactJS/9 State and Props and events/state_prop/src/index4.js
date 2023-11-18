import React from 'react';
import {createRoot} from 'react-dom/client';

function FunctionalComponent(props){
    return (<>
        <h2>This is an example of Functional Component</h2>
        <h3>Hey {props.name}, your age is {props.age}</h3>
    </>);
}
class ClassComponent extends React.Component{
    render(){
        return (<>
            <h2>This is an example of Class Component</h2>        
            <h3>Hey {this.props.name}, your age is {this.props.age}</h3>
            </>);
    };
}
FunctionalComponent.defaultProps={
    age : 0
}

ClassComponent.defaultProps={
    age : 0
}
function MainComponent(){
    return (<>
            <FunctionalComponent name="Andrew"/>
            <FunctionalComponent name="Andrew" age="45"/>

            <ClassComponent name="Mathew"/>
            <ClassComponent name="Mathew" age={50}/>
        </>);
}
createRoot(document.getElementById("root")).render(<MainComponent/>);
