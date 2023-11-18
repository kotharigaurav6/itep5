import React from 'react';
import {createRoot} from 'react-dom/client';
import JsonData from './JSONData.json';

class MainComponent extends React.Component{
    render(){
        return (<>
            <center><h2>User Details..!!</h2></center>
            <table border='1' cellpadding='5' cellspacing='0'>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        JsonData.map((data,index)=>{
                            return (<tr>
                                <td>{index+1}</td>
                                <td>{data.userId}</td>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                            </tr>);
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Index</th>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </tfoot>
            </table>
        </>);
    }
}

createRoot(document.getElementById("root")).render(<MainComponent/>);


