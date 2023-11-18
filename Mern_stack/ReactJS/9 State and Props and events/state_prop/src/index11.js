import React from 'react';
import {createRoot} from 'react-dom/client';

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            title : "Counter"
        }
    }
    increment = ()=>{
        this.setState({
            count : this.state.count+1
        });
    }
    decrement = ()=>{
        this.setState({
            count : this.state.count-1
        });
    }
    reset = ()=>{
        this.setState({
            count : 0
        });
    }
    changeTitle = ()=>{
        this.setState({
            title : "Counting"
        })
    }
    render(){
        return (<>
            <h1>{this.state.title} : {this.state.count}</h1>
            <button onClick={()=>{this.increment()}}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.changeTitle}>Change Title</button>
        </>);
    }
}
createRoot(document.getElementById("root")).render(<MainComponent/>);

