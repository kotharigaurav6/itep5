import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { reset,increment,decrement,incrementByThree,setTitleTag } from "../store/userSlice";
function SideBar(){
    const obj = useSelector(state=>state.user);
    const dispatch = useDispatch();   
    const [title,setTitle] = useState();
    return (<>
        <div id="divright">
            <center>
                <h3>{obj.counterTitle} : {obj.count}</h3>
                <button onClick={()=>{dispatch(increment())}}>Increment</button>
                <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
                <br/><br/>
                <button onClick={()=>{dispatch(reset())}}>Reset</button>
                <button onClick={()=>{dispatch(incrementByThree(3))}}>IncrementByThree</button>
                <br/><br/>
                <input type="text" placeholder="Enter Title" onChange={(event)=>{setTitle(event.target.value)}}/><br/>
                <button onClick={()=>{dispatch(setTitleTag(title))}}>SetTitleTag</button>
            </center>
        </div>
    </>);
}
export default SideBar;