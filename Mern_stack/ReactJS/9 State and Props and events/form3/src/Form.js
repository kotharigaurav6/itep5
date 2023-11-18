import {useState,useRef} from 'react';
import './index.css';
import Display from './Display.js';

function Form(){
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const address = useRef();

    var [student,setStudent] = useState([]);
    const [indexValue,setIndex] = useState(-1);

    var handleEvent = (event)=>{
        event.preventDefault();
        console.log(student);
        if(indexValue==-1){
            var obj = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
                address : address.current.value
            };
            setStudent([...student,obj]);
            event.target.reset();
        }else{
            var obj = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
                address : address.current.value
            };
            console.log("before up : ",student);
              student.splice(indexValue,1);
              student.splice(indexValue,0,obj);
              setStudent([...student]);  
//            student[indexValue] = obj;  
            console.log("after up : ",student);
          
            setIndex(-1);
            event.target.reset();
        }
    }
/*
The behavior you've described in React is related to how React handles state updates and triggers re-renders. Let's break down the points you mentioned:

1. **`student[index] = obj` updates the state, but `student.splice(index, 1)` does not show changes:**

   - **Direct Modification (`student[index] = obj`):**
     - When you directly modify an element in the array using `student[index] = obj`, you are changing the content of the array in place.
     - React's reactivity system can detect changes based on a shallow comparison. If the reference to the array remains the same, but the content changes, React can still detect the change and trigger a re-render.
     - This behavior works because the shallow comparison looks at the references of the array and the modified element within it.

   - **Splice Method (`student.splice(index, 1)`):**
     - The `splice` method modifies the array in place by removing elements. However, it does not create a new reference for the array.
     - Since the array reference remains the same after the `splice` operation, React may not reliably detect the change based on its shallow comparison.
     - React's reactivity system might not recognize the modification because, from its perspective, the array reference did not change, even though the content did.

2. **Why `setStudent([...student])` is used after `student.splice(index, 1)`:**

   - **Creating a New Reference:**
     - To ensure that React detects the change after using `splice` and triggers a re-render, it's common practice to provide a new reference to the state.
     - `setStudent([...student])` creates a new array reference (a shallow copy) by spreading the elements of the existing array.
     - This new reference ensures that React recognizes the change, even if the array content has been modified in place.

   - **Adhering to Immutability Principles:**
     - React encourages the use of immutability for state management. By creating a new reference, you adhere to the principle of not directly modifying the existing state.
     - Immutability makes it easier to reason about state changes, especially in complex applications with component hierarchies.

In summary, directly modifying an array element using `student[index] = obj` might work because React can detect changes based on its shallow comparison. However, when using methods like `splice` that modify the array in place without creating a new reference, it's crucial to provide a new reference using `setStudent([...student])` to ensure React reliably detects the change and triggers a re-render. This approach aligns with React's principles of immutability and provides a consistent and predictable pattern for state updates.
*/

/*
When you directly modify an element within an array in React, such as using `student[index] = obj`, React can detect the change even though the reference to the array remains the same. This is because React's state updates are not solely dependent on detecting a change in the array reference; they also consider changes within the array's content.

When we talk about "references of the array remains the same" in the context of React, we are referring to the memory address or identity of the array in the computer's memory. The reference is a pointer to the location in memory where the array data is stored.

Here's a breakdown of what it means:

Reference to the Array:

In JavaScript, when you create an array, a reference (pointer) to the array is created.
This reference points to the specific location in memory where the array's data is stored.
Array Modification in Place:

If you modify the content of the array directly (e.g., by changing an element using array[index] = value), you are updating the existing array in place.
However, the reference to the array remains the same because you are not creating a new array; you are modifying the existing one.

Its recommended to use the concept of spread operator to show changes to the react.
*/
    var updateData = (index)=>{
        //console.log(index);
        console.log("before : ",student);
        username.current.value = student[index].username;
        email.current.value = student[index].email;
        password.current.value = student[index].password;
        address.current.value = student[index].address;
        console.log("after : ",student);
        setIndex(index);
    }

    /*
    var deleteData = (index)=>{
        
        When you use console.log("delete before : ", student); before the splice operation, it logs a reference to the array at that moment. However, console.log doesn't create a deep copy of the array; instead, it logs a reference to the array in its current state.

Since splice modifies the array in place, the reference you log with "delete before" already reflects the changes made by splice. Therefore, when you log "delete after," which is also logging the same reference, you see the modified array after the deletion.

In summary, the console.log("delete before : ", student); statement shows the modified array because splice modifies the original array immediately, and console.log logs a reference to that modified array.
         
        console.log("delete before : ",student);
        student.splice(index,1);
        console.log("delete after : ",student);
        setStudent([...student]);
        console.log(student);
    }
*/

var deleteData = (index)=>{
     
    console.log("delete before : ",student);
    var studentDemo = [...student];
    studentDemo.splice(index,1);
    console.log("delete after : ",studentDemo);
    setStudent([...studentDemo]);
  //  console.log(student);
}

return (<>
        <div id="leftdiv">
            <center>
                <h2>
                    Fill Details
                </h2>
            </center>
            <form action="" onSubmit={handleEvent}>
            <table>
                <tr>
                    <td>
                        <input type="text"
                        placeholder='Enter Username'
                        ref={username}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="email"
                        placeholder='Enter Email'
                        ref={email}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password"
                        placeholder='Enter Password'
                        ref={password}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <textarea type="text"
                        placeholder='Enter Address'
                        ref={address}
                        ></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit"
                        value="Submit"
                    />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="reset"
                        value="Reset"
                        />
                    </td>
                </tr>
            </table>
            </form>
        </div>
        <div id="rightdiv">
            <center>
                <h2>
                    Student Details
                </h2>
            </center>
            <Display list={student} update={updateData} delete={deleteData}/>            
        </div>
    </>);
}
export default Form;