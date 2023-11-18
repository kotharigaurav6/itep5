import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function Display(props) {
  return (<>
    <center><h1>Student List</h1>
    <table border="1" cellPadding="6" cellSpacing="0">
      <thead>
        <tr>
          <th>S.NO</th>  
          <th>Username</th>  
          <th>Email</th>  
          <th>Password</th>  
          <th>Address</th>  
        </tr>  
      </thead>  
      <tbody>
        {
          props.list.map((data,index)=>{
            return(<tr>
              <td>{index+1}</td>  
              <td>{data.username}</td>  
              <td>{data.email}</td>  
              <td>{data.password}</td>  
              <td>{data.address}</td>  
          </tr>)    
          })
        }
      </tbody>  
    </table>  </center>
  </>);
}

export default Display;
