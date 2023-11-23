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
        const {username,email,password,gender,subject,address} = inputValue;
        
        var hobbies="";
        hobbies += (document.getElementById("cricket").checked)?"Cricket " : ""; 
        hobbies += (document.getElementById("football").checked)?"Football " : ""; 
        
        // console.log("username : "+username);
        // console.log("gender : "+gender);
        // console.log("cricket : "+cricket);
        // console.log("football : "+football);
        
        var obj = {username,email,password,gender,hobbies,subject,address};
        //console.log(obj);
        setStudent([...student,obj]);
        localStorage.setItem("mydata",JSON.stringify([...JSON.parse(localStorage.getItem("mydata"))||[],obj]));
        setInputValue({});
        event.target.reset();
    }

   return(<>
   <h3>SignUp Form</h3>
   <form action="" onSubmit={addData}>
   <input type="text" required placeholder="Enter Username" name="username" onChange={getData}/><br/>
  
   <input type="email" required placeholder="Enter Email" name="email" onChange={getData}/><br/>
  
   <input type="password" required placeholder="Enter Password" name="password" onChange={getData}/><br/>
  
   <input type="radio" required id="male" name="gender" value="male" onClick={getData}/>Male
   <input type="radio" required id="female" name="gender" value="female" onClick={getData}/>Female<br/>
  
   <input type="checkbox" id="cricket" name="cricket" value="cricket"/>Cricket
   <input type="checkbox" id="football" name="football" value="football"/>Football<br/>
  
   <select name="subject" required onChange={getData}>
        <option value="">Select Subject</option>
        <option value="C Language">C Language</option>
        <option value="C++ Language">C++ Language</option>
        <option value="C# Language">C# Language</option>
   </select><br/>

   <textarea required placeholder="Enter address" onChange={getData} name="address"></textarea> <br/>

    <input type="submit" value="Register"/>
   </form>
   </>);
}

export default SignUp;