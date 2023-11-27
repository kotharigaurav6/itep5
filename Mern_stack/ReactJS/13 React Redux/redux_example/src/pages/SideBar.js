import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../actions/counterAction';
import { setTagline } from '../actions/headAction';

class SideBar extends React.Component{
    constructor(props){
            super(props);
            this.state = {
                tagline : this.props.tagline
            }
    }
    render(){
        const {tagline} = this.state;
        const {incrementCounter,decrementCounter,setTagline,counterObj} = this.props;    
        return (<div id="divright">
            <center>
                <h1>{counterObj.counterTitle} : {counterObj.count}</h1>
                <br/>
                <button onClick={incrementCounter}>Increment Counter</button>
                <button onClick={decrementCounter}>Decrement Counter</button>
                <br/><br/>
                Enter Title : <input type="text" placeholder='Enter TagLine' onChange={(event)=>{this.setState({tagline:event.target.value})}}/>
                <button onClick={()=>{setTagline(tagline)}}>Click To Set TagLine</button>
            </center>
        </div>);
    }    
}
const mapStateToProp=(state)=>{
    return {
        counterObj : state.counter,
        tagline : state.head.tagline    
    }
}
const mapDispatchToProp={
    incrementCounter,
    decrementCounter,
    setTagline
}

export default connect(mapStateToProp,mapDispatchToProp)(SideBar);