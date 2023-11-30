import {useSelector,useDispatch} from 'react-redux';
import {updateStudent,deleteStudent} from '../store/studSlice.js';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
function ViewStudent(){
    const students = useSelector(state=>state.student.students);
    const navigate = useNavigate();
    
    const loginStatus = useSelector(state=>state.student.loginStatus);
    console.log(loginStatus);
    useEffect(()=>{
        if(loginStatus==false)
            navigate('/loginStudent');
    },[]);

    const dispatch = useDispatch();
    const handleUpdate = (obj)=>{
        dispatch(updateStudent(obj));
        navigate('/updateStudentForm');
    }
    return (<>
        <div>
            <center>
                <h2>Student Details</h2>
                <table border="1" cellSpacing="0" cellPadding="10">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((stud,index)=>{
                                return(<tr>
                                    <td>{index+1}</td>
                                    <td>{stud.username}</td>
                                    <td>{stud.email}</td>
                                    <td>{stud.password}</td>
                                    <td>{stud.address}</td>
                                    <td><button onClick={()=>{handleUpdate({stud,index})}}>Update</button></td>
                                    <td><button onClick={()=>{dispatch(deleteStudent(index))}}>Delete</button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </center>
        </div>
    </>);
}
export default ViewStudent;