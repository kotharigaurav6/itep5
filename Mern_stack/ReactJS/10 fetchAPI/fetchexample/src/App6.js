import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [entries,setEntries] = useState([]);
  const getDetails =async ()=>{
    try{
      var response = await fetch('data.json');
      var data = await response.json();
      setEntries(data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getDetails();
  },[]);

  return (<>
    <center><h1>Example of FetchAPI accessing data from json file</h1></center>
    <table border="1" cellPadding="6" cellSpacing="0">
      <thead>
        <tr>
          <th>S.NO</th>  
          <th>UserId</th>  
          <th>Id</th>  
          <th>Title</th>  
          <th>Body</th>  
        </tr>  
      </thead>  
      <tbody>
        {
          entries.map((data,index)=>{
            return(<tr>
              <td>{index+1}</td>  
              <td>{data.userId}</td>  
              <td>{data.id}</td>  
              <td>{data.title}</td>  
              <td>{data.body}</td>  
          </tr>)    
          })
        }
      </tbody>  
    </table>  
  </>);
}

export default App;
