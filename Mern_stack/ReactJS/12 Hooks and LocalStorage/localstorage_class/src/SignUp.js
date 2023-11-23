import React from 'react';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    render(){
        var addData = (event)=>{
            event.preventDefault();

            var hobbies = "";
            hobbies += document.getElementById("cricket").checked ? "Cricket " : "";
            hobbies += document.getElementById("football").checked ? "Football " : "";
            
            var obj = {
                username : document.getElementsByName("username")[0].value,
                email : document.getElementsByName("email")[0].value,
                password : document.getElementsByName("password")[0].value,
                gender : (document.getElementById("male").checked)?"Male" : "Female",
                hobbies : hobbies,
                subject : document.getElementsByName("subject")[0].value,
                address : document.getElementsByName("address")[0].value
            }

            this.setState({data : [...this.state.data,obj]});
            localStorage.setItem("mydata",JSON.stringify([...JSON.parse(localStorage.getItem("mydata"))||[],obj]));
            event.target.reset();
        }
        return(<>
            <h3>SignUp Form</h3>
            <form action="" onSubmit={addData}>

            <input type="text" required placeholder="Enter Username" name="username"/><br/>
            <input type="email" required placeholder="Enter Email" name="email"/><br/>
            <input type="password" required placeholder="Enter Password" name="password"/><br/>
            
            <input type="radio" required id="male" name="gender" value="male"/>Male
            <input type="radio" required id="female" name="gender" value="female"/>Female<br/>
            
            <input type="checkbox" id="cricket" name="cricket" value="cricket"/>Cricket
            <input type="checkbox" id="football" name="football" value="football"/>Football<br/>
            
            <select name="subject" required>
                 <option value="">Select Subject</option>
                 <option value="C Language">C Language</option>
                 <option value="C++ Language">C++ Language</option>
                 <option value="C# Language">C# Language</option>
            </select><br/>
            
            <textarea required placeholder="Enter address" name="address"></textarea> <br/>
         
             <input type="submit" value="Register"/>
            </form>
            </>);
         }
}

export default SignUp;