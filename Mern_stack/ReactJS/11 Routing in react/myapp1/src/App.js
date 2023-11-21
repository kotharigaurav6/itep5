import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
function App() {
  return (<>
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/about" element={<AboutComponent/>}></Route>
        <Route path="/contact" element={<ContactComponent/>}></Route>
      </Routes>
    </Router>
  </>);
}

export default App;
