import React from 'react';
import {createRoot} from 'react-dom/client';

function FunctionalComponent(props){
    return (<>
        <h2>This is an example of Functional Component</h2>
        <h3>Book {props.book.title} is Written By {props.book.author}</h3>
    </>);
}
class ClassComponent extends React.Component{
    render(){
        return (<>
            <h2>This is an example of Class Component</h2>        
            <h3>Book {this.props.book.title} is Written By {this.props.book.author}</h3>
            </>);
    };
}    

function MainComponent(){
        const obj = {
            title : "Programming in Java",
            author : "James Gosling"
        }
        return (<>
            <FunctionalComponent book = {obj}/>
            <ClassComponent book = {obj}/>
        </>);
}
createRoot(document.getElementById("root")).render(<MainComponent/>);

