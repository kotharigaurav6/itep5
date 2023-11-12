import {useState} from 'react';
import './index.css';
import Display from './Display.js';

function Form(){
    const [username,setUserName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [address,setAddress] = useState();
    const [student,setStudent] = useState([]);

    var handleEvent = (event)=>{
        event.preventDefault();
        var obj = {username,email,password,address};
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
                        onChange={(event)=>{
                            setUserName(event.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="email"
                        placeholder='Enter Email'
                        onChange={(event)=>{
                            setEmail(event.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password"
                        placeholder='Enter Password'
                        onChange={(event)=>{
                            setPassword(event.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <textarea type="text"
                        placeholder='Enter Address'
                        onChange={(event)=>{
                            setAddress(event.target.value);
                        }}></textarea>
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