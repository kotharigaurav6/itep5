import { useSelector } from "react-redux";
function Header(){
    const obj = useSelector(state=>state.user);
    return (<>
        <div id="header">
            <center>
                <h1>{obj.counterTitle}</h1>
                <h2>{obj.tagline}</h2>
                <h3>Count : {obj.count}</h3>
            </center>
        </div>
    </>);
}
export default Header;