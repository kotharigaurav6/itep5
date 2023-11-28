import logo from './logo.svg';
import './App.css';
import Header from './pages/Header.js';
import Section from './pages/Section.js';
import SideBar from './pages/SideBar.js';
import Footer from './pages/Footer.js';

function App() {
  return (<>
      <Header/>
        <div id="row">
          <Section/>
          <SideBar/>
        </div>
      <Footer/>
  </>);
}

export default App;
