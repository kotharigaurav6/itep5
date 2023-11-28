import {useSelector,useDispatch} from 'react-redux';
import {updateStudent} from '../store/studSlice.js';

function SideBar(){
    const students = useSelector(state=>state.student.students);
    const dispatch = useDispatch();
    return (<>
        <div id="divright">
            <center>
                <h2>Student Details</h2>
                <table border="1" cellspacing="0" cellpadding="10">
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
                            students.map((stud,i)=>{
                                return(<tr>
                                    <td>{i+1}</td>
                                    <td>{stud.username}</td>
                                    <td>{stud.email}</td>
                                    <td>{stud.password}</td>
                                    <td>{stud.address}</td>
                                    <td><button onClick={()=>{dispatch(updateStudent(stud))}}>Update</button></td>
                                    <td><button >Delete</button></td>
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