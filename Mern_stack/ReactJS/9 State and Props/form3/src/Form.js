import {useState,useRef} from 'react';
import './index.css';
import Display from './Display.js';

function Form(){
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const address = useRef();

    const [student,setStudent] = useState([]);
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
    var deleteData = (index)=>{
        console.log(student);
        student.splice(index,1);
        setStudent([...student]);
        console.log(student);
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
                        onChange={()=>{
                            console.log(student);
                        }}
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