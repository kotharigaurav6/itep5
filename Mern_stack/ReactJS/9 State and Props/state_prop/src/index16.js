import {createRoot} from 'react-dom/client';
import React, {useState,useRef} from 'react';

function FunctionalComponent(){
    const [username,setUserName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [userDetails,setDetails] = useState({});

    const showDetails=()=>{
        var data = {username,email,password}
        setDetails(data);
    }    
    return(<>
        <h1>Functional Component</h1>
        <input 
        type='text'
        placeholder='Enter Username'
        onChange={
            (event)=>{
                console.log(event.target.value);
                setUserName(event.target.value)
            }
        }/>
        <br/>
        <input 
        type='email'
        placeholder='Enter Email'
        onChange={
            (event)=>{
                console.log(event.target.value);
                setEmail(event.target.value)
            }
        }/>
        <br/>
        <input 
        type='password'
        placeholder='Enter Password'
        onChange={
            (event)=>{
                console.log(event.target.value);
                setPassword(event.target.value)
            }
        }/>
        <br/>
        <input 
        type='submit'
        onClick={showDetails}
        />

    <h3>{userDetails.username ? `UserName : ${userDetails.username}` : ''}</h3>
    <h3>{userDetails.email ? `Email : ${userDetails.email}` : ''}</h3>
    <h3>{userDetails.password ? `Password : ${userDetails.password}` : ''}</h3>

    </>);
}

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username : '',
            email : '',
            password : '',
            userDetails : '' 
        }
    }
    showDetails=()=>{
        var data = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        this.setState({userDetails:data});
    }    

    render(){
        return(<>
            <h1>Class Component</h1>
            <input 
            type='text'
            placeholder='Enter Username'
            onChange={
                (event)=>{
                    console.log(event.target.value);
                    this.setState({username : event.target.value})
                }
            }/>
            <br/>
            <input 
            type='email'
            placeholder='Enter Email'
            onChange={
                (event)=>{
                    console.log(event.target.value);
                    this.setState({email : event.target.value})
                }
            }/>
            <br/>
            <input 
            type='password'
            placeholder='Enter Password'
            onChange={
                (event)=>{
                    console.log(event.target.value);
                    this.setState({password : event.target.value})
                }
            }/>
            <br/>
            <input 
            type='submit'
            onClick={this.showDetails}
            />

    <h3>{this.state.userDetails.username ? `UserName : ${this.state.userDetails.username}` : ''}</h3>
    <h3>{this.state.userDetails.email ? `Email : ${this.state.userDetails.email}` : ''}</h3>
    <h3>{this.state.userDetails.password ? `Password : ${this.state.userDetails.password}` : ''}</h3>

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

