import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
function Navbar(){
    const [menuItems,setMenuItems] = useState();
    useEffect(()=>{

        var result = setInterval(()=>{
            var value = localStorage.getItem("navshow");
    //console.log(value);
    if(value==="null"){
        setMenuItems(<>
            <Link to="/">Home</Link>&nbsp; &nbsp;   | &nbsp;&nbsp;        
            <Link to="/login">Login</Link>&nbsp; &nbsp; | &nbsp;&nbsp;
            <Link to="/registration">Registration</Link>                    
        </>);
    }else if(value==="login"){
        setMenuItems(<>
            <Link to="/">Home</Link>&nbsp; &nbsp;   | &nbsp;&nbsp;        
            <Link to="/registration">Registration</Link>                    
        </>);
    }
    else if(value==="registration"){
        setMenuItems(<>
            <Link to="/">Home</Link>&nbsp; &nbsp;   | &nbsp;&nbsp;        
            <Link to="/login">Login</Link>
        </>);
    }
       });

      return ()=>{clearInterval(result)}
   },[]);
    return(<>
        {menuItems}

        {/* {
            (condition) ? (<>
                <h1></h1>
            </>) : (<>
                <h1></h1>
            </>)
        } */}

    </>);
}

export default Navbar;

/*
If we set 
    <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
    </Routes>

    then in this case when root route(/) is going to match, then no result is found and due to no perfect match,none of the component is going to be render which results in  no value in the local storage is going to be set.
    
    Now when var value = localStorage.getItem("navshow"); gets executes, the value variable will holds null , and when we checks value==="null" in if, so it will gives you false, "null" type is string and null type is object, which results in no result blank screen.

*/

/*
Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
Navbar@http://localhost:3000/static/js/bundle.js:331:84
App
Router@http://localhost:3000/static/js/bundle.js:39689:7
BrowserRouter@http://localhost:3000/static/js/bundle.js:37740:7
*/