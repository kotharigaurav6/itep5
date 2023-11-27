import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component{
    render(){
        const {tagline} = this.props;    
        return (<div id="header">
            <center>
                <h1>Redux Example</h1>
                <h2>{tagline}</h2>
            </center>
        </div>);
    }
}
const mapStateToProp=(state)=>{
    return {
        tagline : state.head.tagline
    }
}

export default connect(mapStateToProp)(Header);