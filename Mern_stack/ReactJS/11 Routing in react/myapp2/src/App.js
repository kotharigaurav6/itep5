import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
//import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//import {MemoryRouter as Router,Routes,Route} from 'react-router-dom';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import ContactComponent1 from './components/ContactComponent1';
import ContactComponent2 from './components/ContactComponent2';

function App() {
  return (<>

    <Router>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/about" element={<AboutComponent/>}/>
        <Route path="/contact" element={<ContactComponent/>}>
            <Route path="contactcomponent1" element={<ContactComponent1/>}></Route>
            <Route path="contactcomponent2" element={<ContactComponent2/>}></Route>
        </Route>
      </Routes>
    </Router>

    {/* <Router>
      <Routes>
        <Route path="/" element={<HeaderComponent/>}></Route>
        <Route path="/about" element={<AboutComponent/>}></Route>
        <Route path="/contact" element={<ContactComponent/>}>
            <Route path="contactcomponent1" element={<ContactComponent1/>}></Route>
            <Route path="contactcomponent2" element={<ContactComponent2/>}></Route>
        </Route>
      </Routes>
    </Router> */}

  </>);
}

export default App;
