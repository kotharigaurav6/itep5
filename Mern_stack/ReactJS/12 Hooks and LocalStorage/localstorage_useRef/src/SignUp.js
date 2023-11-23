import {useState,useRef} from 'react';
function SignUp(){
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const male = useRef();
    const female = useRef();
    const cricket = useRef();
    const football = useRef();
    const subject = useRef();
    const address = useRef();
    /*
    Q. useState and useRef which one is more preferable ?
    A. The answer to your question depends on what you want to achieve with your React component. Both useState and useRef are hooks that allow you to store and manipulate data in a functional component, but they have some important differences.

useState is a hook that lets you create and update a state variable in your component. A state variable is a piece of data that can change over time and affect the rendering of your component. When you use useState, you get an array with two elements: the current state value and a function to update it. For example:

```jsx
const [count, setCount] = useState(0); // create a state variable called count and initialize it to 0
```

Whenever you call the update function (setCount in this example), React will re-render your component with the new state value. This way, you can make your component dynamic and responsive to user interactions or other events.

useRef is a hook that lets you create and access a mutable reference object in your component. A reference object is a container that has a current property that can hold any value. For example:

```jsx
const inputRef = useRef(null); // create a reference object called inputRef and initialize its current property to null
```

Unlike useState, useRef does not cause your component to re-render when you change the current property of the reference object. This means that useRef is useful for storing values that are not directly related to the rendering of your component, such as DOM elements, timers, or external data sources. You can also use useRef to store the previous state or props of your component, as explained in this article².

To summarize, useState and useRef are both useful hooks for managing data in your component, but they have different use cases and behaviors. useState is for creating and updating state variables that affect the rendering of your component, while useRef is for creating and accessing reference objects that do not trigger re-renders. 


    */
    const [student,setStudent] = useState([]); 
    const addData = (event)=>{
        event.preventDefault();

        var hobbies="";
        hobbies += (cricket.current.checked)?"Cricket " : ""; 
        hobbies += (football.current.checked)?"Football " : ""; 
        
        // console.log("username : "+username);
        // console.log("gender : "+gender);
        // console.log("cricket : "+cricket);
        // console.log("football : "+football);
        
        var obj = {
            username : username.current.value,
            email : email.current.value,
            password : password.current.value,
            gender : (male.current.checked)?"Male" : "Female",
            hobbies : hobbies,
            subject : subject.current.value,
            address : address.current.value
        };
        console.log(obj);
        setStudent([...student,obj]);
        localStorage.setItem("mydata",JSON.stringify([...JSON.parse(localStorage.getItem("mydata"))||[],obj]));
        event.target.reset();
    }

   return(<>
   <h3>SignUp Form</h3>
   <form action="" onSubmit={addData}>
   <input type="text" required placeholder="Enter Username" name="username" ref={username}/><br/>
  
   <input type="email" required placeholder="Enter Email" name="email" ref={email}/><br/>
  
   <input type="password" required placeholder="Enter Password" name="password" ref={password}/><br/>
  
   <input type="radio" required id="male" name="gender" value="male" ref={male}/>Male
   <input type="radio" required id="female" name="gender" value="female" ref={female}/>Female<br/>
  
   <input type="checkbox" id="cricket" name="cricket" value="cricket" ref={cricket} />Cricket
   <input type="checkbox" id="football" name="football" value="football" ref={football}/>Football<br/>
  
   <select name="subject" required ref={subject}>
        <option value="">Select Subject</option>
        <option value="C Language">C Language</option>
        <option value="C++ Language">C++ Language</option>
        <option value="C# Language">C# Language</option>
   </select><br/>

   <textarea required ref={address} placeholder="Enter address" name="address"></textarea> <br/>

    <input type="submit" value="Register"/>
   </form>
   </>);
}

export default SignUp;