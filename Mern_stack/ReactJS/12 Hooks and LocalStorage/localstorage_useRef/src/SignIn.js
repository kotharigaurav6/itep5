import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

function SignIn(){
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();
    const checkLogin = (event)=>{
        event.preventDefault();
        var loginCred = {
            email : email.current.value,
            password : password.current.value
        }
        var arr = JSON.parse(localStorage.getItem("mydata"));
        var res = arr.filter((d,i)=>{
           return d.email==loginCred.email && d.password==loginCred.password;           
        });
        // filter returns an array of all the matched array element
        console.log(res);
        if(res.length==1){
            console.log("Login successfull");
            navigate('/profile',{
                state:{
                    email : loginCred.email,
                    password : loginCred.password,
                    status : true
                }
            });            
        }
        else{
            console.log("Error occured");
            navigate('/profile',{
                state:{
                    status : false
                }
            });            
        }
        event.target.reset();
    }

   return(<>
   <h3>SignIn Form</h3>
   <form action="" onSubmit={checkLogin}>
  
   <input type="email" required placeholder="Enter Email" name="email" ref={email}/><br/>
  
   <input type="password" required placeholder="Enter Password" name="password" ref={password}/><br/>
  
   <input type="submit" value="Login"/>
   </form>
   </>);
}

export default SignIn;