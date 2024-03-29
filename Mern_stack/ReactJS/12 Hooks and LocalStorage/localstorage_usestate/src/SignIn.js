import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SignIn(){
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const getData =(event)=>{
        const {name,value} = event.target;
        setData({...data,[name]:value});
    }
    const checkLogin = (event)=>{
        event.preventDefault();
        var loginCred = {
            email : data.email,
            password : data.password
        }
        var arr = JSON.parse(localStorage.getItem("mydata"));
        var res = arr.filter((d,i)=>{
           return d.email==loginCred.email && d.password==loginCred.password;           
        });
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
  
   <input type="email" required placeholder="Enter Email" name="email" onChange={getData}/><br/>
  
   <input type="password" required placeholder="Enter Password" name="password" onChange={getData}/><br/>
  
   <input type="submit" value="Login"/>
   </form>
   </>);
}

export default SignIn;