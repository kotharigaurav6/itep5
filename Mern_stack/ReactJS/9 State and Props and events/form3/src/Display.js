import './index.css';
function Display(props){
    return (<>
        <table style={{width:"100%"}} border='1' cellpadding='5' cellspacing='0'>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((data,index)=>{
                        return (<tr>
                            <td>{index+1}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td>{data.address}</td>
                            <td><button onClick={()=>{props.update(index)}}>Update</button></td>
                            <td><button onClick={()=>{props.delete(index)}}>Delete</button></td>
                        </tr>);
                    })
                }
            </tbody>
            <tfoot>
            <tr>
                    <th>Index</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </tfoot>
        </table>
    </>);
}

export default Display;

