import {useState,useRef} from 'react';
import './index.css';
import Display from './Display.js';

function Form(){
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const address = useRef();

    const [student,setStudent] = useState([]);

    var handleEvent = (event)=>{
        event.preventDefault();
        var obj = {
            username : username.current.value,
            email : email.current.value,
            password : password.current.value,
            address : address.current.value
        };
        setStudent([...student,obj]);
        event.target.reset();
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
            <Display list={student}/>            
        </div>
    </>);
}
export default Form;