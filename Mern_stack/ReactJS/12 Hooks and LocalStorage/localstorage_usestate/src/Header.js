import {Link} from 'react-router-dom';

function Header(){
    return (<>
        <Link to='/'>Home</Link>
        <Link to='/signin'>SignIn</Link>
        <Link to='/signup'>SignUp</Link>
    </>);
}

export default Header;