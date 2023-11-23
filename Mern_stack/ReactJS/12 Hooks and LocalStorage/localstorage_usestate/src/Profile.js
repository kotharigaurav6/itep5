import {useLocation} from 'react-router-dom';
function Profile(){
    const location = useLocation();
    console.log(location);

    return (<>
        <h2>
            Welcome {location.state.email} <br/>
            Your Password is {location.state.password} <br/>
            {/* Status {(location.state.status)?"Hello":"----"} */}
            Status {String(location.state.status)}
        </h2>
    </>);
}

export default Profile;