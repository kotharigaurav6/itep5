import {Link} from 'react-router-dom';
function HeaderComponent(){
    return(<div style={{height:"40px",backgroundColor:"black",padding:"10px"}}>
        <Link style={{color:"white"}} to="/">Home</Link>&nbsp;&nbsp;
        <Link style={{color:"white"}} to="/about">About</Link>  &nbsp;&nbsp;
        <Link style={{color:"white"}} to="/contact">Contact</Link>
    </div>);
}
export default HeaderComponent;