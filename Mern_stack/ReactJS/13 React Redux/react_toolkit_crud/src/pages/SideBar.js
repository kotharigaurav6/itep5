import {useSelector,useDispatch} from 'react-redux';
import {updateStudent,deleteStudent} from '../store/studSlice.js';

function SideBar(){
    const students = useSelector(state=>state.student.students);
    const dispatch = useDispatch();
    return (<>
        <div id="divright">
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
                                    <td><button onClick={()=>{dispatch(updateStudent({stud,index}))}}>Update</button></td>
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
export default SideBar;