import React from 'react';
import { connect } from 'react-redux';
import { resetCounter } from '../actions/counterAction';

class Section extends React.Component{
    render(){
        const {counterObj,resetCounter} = this.props;    
        return (<div id="divleft">
            <center>
                <h1>{counterObj.counterTitle} : {counterObj.count}</h1>
                <br/>
                <button onClick={resetCounter}>Reset Counter</button>
            </center>
        </div>);
    }    
}
const mapStateToProp=(state)=>{
    return {
        counterObj : state.counter,    
    }
}
const mapDispatchToProp={
    resetCounter
}

export default connect(mapStateToProp,mapDispatchToProp)(Section);