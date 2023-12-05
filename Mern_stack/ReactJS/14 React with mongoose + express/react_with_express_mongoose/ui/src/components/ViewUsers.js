import axios from "axios";
import { useEffect,useState } from "react";
import { requestedURL } from "../urls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ViewUsers(){
    const [userList,setUserList] = useState([]);
    const userData = useSelector(state=>state.userSlice)
    const navigate = useNavigate();

    useEffect(()=>{
        if(!userData.status)
            navigate("/");

        async function fetchData(){
            try{
                var resultData = await axios.get(requestedURL+'/viewusers');
                console.log(resultData.data.userList); 
                 setUserList(resultData.data.userList);
             }catch(err){
                 console.log("Error in view User : ",err);
             }      
        }
        fetchData();
    },[]);
    return (<div className="p-5">
                <center><h4>User Details</h4></center>
        <table className="table table-bordered" cellPadding="8" cellSpacing="0" border="1">
            
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map((user,i)=>{
                        return (<tr>
                            <td>{i+1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.address}</td>
                        </tr>);
                    })
                }
            </tbody>
        </table>
    </div>);
}
export default ViewUsers;