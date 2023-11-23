import {Link} from 'react-router-dom';

function Header(){
    return (<>
    <hr/>
        <Link to='/'>Home</Link> &nbsp;&nbsp;
        <Link to='/signin'>SignIn</Link>&nbsp;&nbsp;
        <Link to='/signup'>SignUp</Link>
    <hr/>
    </>);
}

export default Header;