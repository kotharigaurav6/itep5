import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import ViewStudent from './pages/ViewStudent';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom';
import Navbar from './pages/Navbar.js';
import UpdateStudentForm from './pages/UpdateStudentForm.js';
function App() {
  return (<>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/addStudent" element={<AddStudent/>}></Route>
      <Route path="/viewStudent" element={<ViewStudent/>}></Route>
      <Route path="/updateStudentForm" element={<UpdateStudentForm/>}></Route>
      <Route path="/loginStudent" element={<Login/>}></Route>
      <Route path="/logout" element={<Home/>}></Route>
      
    </Routes>
    {/* <Header/>
      <div id="row">
          <Section/>
          <SideBar/>
      </div>
    <Footer/> */}
  </>);
}

export default App;
