import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import { logout } from '../store/userSlice.js';

function Logout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(logout());
        navigate("/");
    },[]);        
    return (<></>);
}
export default Logout;