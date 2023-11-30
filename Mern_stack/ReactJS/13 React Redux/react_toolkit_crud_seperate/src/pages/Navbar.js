import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../store/studSlice.js';
function Navbar(){
    const [menuItem,setMenuItem] = useState();
    var navShow = useSelector(state=>state.student.navShow);
    const dispatch = useDispatch();
    console.log(navShow);
    useEffect(()=>{
        var result = setInterval(()=>{
            if(navShow=="home"){
                setMenuItem(<big>
                    <Link to="/">Home</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/loginStudent">Login Student</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/addStudent">Add Student</Link>
                    </big>);
            }
            else if(navShow=="login"){
                setMenuItem(<big>
                    <Link to="/">Home</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/viewStudent">View Student</Link>  &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/logout" onClick={()=>{dispatch(logout())}}>Logout</Link>
                    </big>);
            }
        });
        return ()=>{clearInterval(result)}
    },[navShow]);

    return (<>
        <hr/>
        {menuItem}
        <hr/>
    </>);
}

export default Navbar;

{/* <big>
<Link to="/">Home</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
<Link to="/loginStudent">Login Student</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
<Link to="/addStudent">Add Student</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
<Link to="/viewStudent">View Student</Link>
</big> */}
