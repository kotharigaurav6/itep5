import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Registration from './components/Registration.js';
import Profile from './components/Profile.js';
import ViewUsers from './components/ViewUsers.js';
import Logout from './components/Logout.js';

import './App.css';

function App() {
  return (<>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/viewusers" element={<ViewUsers/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
    </Routes>
  </>);
}

export default App;
