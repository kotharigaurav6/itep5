import {Outlet,Link} from 'react-router-dom';
function ContactComponent(){
    return (<>
    <div style={{backgroundColor:"black",width:"200px",marginLeft:"100px"}}>
        <Link style={{color:"white"}} to="/contact/contactcomponent1">Contact Component 1</Link>
        <br/>
        <Link style={{color:"white"}} to="/contact/contactcomponent2">Contact Component 2</Link>
    </div>   
        {/* <h1>This is Contact Component</h1> */}
        <Outlet/>
    </>);
}
export default ContactComponent;