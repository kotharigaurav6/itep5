import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Profile(){
    const userData = useSelector(state=>state.userSlice)
    const navigate = useNavigate();

    useEffect(()=>{
        if(!userData.status)
            navigate("/");
    },[]);    
    return(<>
        <h1 style={{padding:"30px"}}>Profile Page</h1>
        <h2 style={{padding:"30px"}}>
            Welcome {userData.user_Data.email}
        </h2>
    </>);
}
export default Profile;