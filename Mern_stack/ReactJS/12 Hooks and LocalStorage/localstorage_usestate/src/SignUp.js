import {useState} from 'react';
function SignUp(){

    const [inputValue,setInputValue] = useState({});
    const [student,setStudent] = useState([]); 
    const getData = (event)=>{
        const {name,value} = event.target;
        setInputValue({...inputValue,[name]:value});
    }
    const addData = (event)=>{
        event.preventDefault();
        const {username,gender} = inputValue;
        console.log("username : "+username);
        console.log("gender : "+gender);
    }

   return(<>
   <center><h1>SignUp Form</h1></center>
   <form action="" onSubmit={addData}>
   <input type="text" placeholder="Enter Username" name="username" onChange={getData}/><br/>
   <input type="email" placeholder="Enter Email" name="email" onChange={getData}/><br/>
   <input type="password" placeholder="Enter Password" name="password" onChange={getData}/><br/>
   <input type="radio" id="male" name="gender" onClick={getData}/><br/>
   <input type="radio" id="female" name="gender" onClick={getData}/><br/>
   <select name="subject" onChange={getData}>
        <option value="">Select Subject</option>
        <option value="C Language">C Language</option>
        <option value="C++ Language">C++ Language</option>
        <option value="C# Language">C# Language</option>
   </select>
   <textarea placeholder="Enter address" onChange={getData} name="address"></textarea>
    <input type="submit" value="Register"/>
   </form>
   </>);
}

export default SignUp;