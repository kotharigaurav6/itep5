import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj : {}
        }
    }
    checkLogin = (event)=>{
        event.preventDefault();
        var loginCred = {
            email : document.getElementsByName("email")[0].value,
            password : document.getElementsByName("password")[0].value
        }
        var arr = JSON.parse(localStorage.getItem("mydata"));
        var res = arr.filter((d,i)=>{
           return d.email==loginCred.email && d.password==loginCred.password;           
        });
        console.log(res);
        if(res.length==1){
            console.log("Login successfull");
            /* not working | also with router not supported | error like navigate is not a function */
            // const {history} = this.props;
            // history.push('/profile',{
            //     email:loginCred.email,
            //     password:loginCred.password
            // });
            
            // navigate('/profile',{
            //     state:{
            //         email : loginCred.email,
            //         password : loginCred.password,
            //         status : true
            //     }
            // });
        }
        else{
            console.log("Error occured");
        }
        event.target.reset();
    }

    render(){
        return(<>
            <h3>SignIn Form</h3>
            <form action="" onSubmit={this.checkLogin}>
           
            <input type="email" required placeholder="Enter Email" name="email"/><br/>
            <input type="password" required placeholder="Enter Password" name="password"/><br/>
           
            <input type="submit" value="Login"/>
            </form>
            </>);         
    };
}

export default SignIn;