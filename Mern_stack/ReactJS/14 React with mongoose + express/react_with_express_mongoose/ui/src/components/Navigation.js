import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { logout } from '../store/userSlice.js';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

/*
  Nav.Link refresh the page byDefault, so we prefer Link or either we need to write
  <Nav.Link as={Link} to="/internalPage">
*/

function Navigation() {
    const [menuItem,setMenuItem] = useState();    
    const navShow = useSelector(state=>state.userSlice.navShow);
    const userData = useSelector(state=>state.userSlice.user_Data)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        var result = setInterval(()=>{
            if(navShow=="home"){
                setMenuItem(<>
                    <Link id="navstyle" to="/">Home</Link>
                    <Link id="navstyle" to="/login">Login</Link>
                    <Link id="navstyle" to="/register">Registration</Link>
                </>);
            }
            else if(navShow=="profile"){
                    setMenuItem(<>
                      <Link id="navstyle">{userData.email}</Link>
                      <Link id="navstyle" to="/viewusers">View Users</Link>
                      <Link id="navstyle" to="/logout">Logout</Link>
                    </>);
            }
        });
        return ()=>{
            clearInterval(result);
        }
    },[navShow]);

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItem}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;