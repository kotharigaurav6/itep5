import React from 'react';
import {createRoot} from 'react-dom/client';
import propTypes from 'prop-types';

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
FunctionalComponent.propTypes={
    name : propTypes.string.isRequired,
    age : propTypes.number.isRequired
}
ClassComponent.propTypes={
    name : propTypes.string.isRequired,
    age : propTypes.number.isRequired
}

function MainComponent(){
    return (<>
            <FunctionalComponent name="Andrew" age="100"/>
            <FunctionalComponent name="Andrew" age={45}/>

            <ClassComponent name="Mathew" age="56"/>
            <ClassComponent name="Mathew" age={50}/>
{/* 
Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `FunctionalComponent`, expected `number`.
FunctionalComponent@http://localhost:3000/static/js/bundle.js:36:26
MainComponent
*/}

        </>);
}
createRoot(document.getElementById("root")).render(<MainComponent/>);

