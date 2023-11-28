import { useSelector,useDispatch } from "react-redux";
import { reset } from "../store/userSlice";
function Section(){
    const count = useSelector(state=>state.user.count);
    const dispatch = useDispatch();   
    return (<>
        <div id="divleft">
            <center>
                <h3>Count : {count}</h3>
                <button onClick={()=>{dispatch(reset())}}>Reset</button>
            </center>
        </div>
    </>);
}
export default Section;