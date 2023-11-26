import logo from './logo.svg';
import './App.css';
import Header from './pages/Header.js';
import Section from './pages/Section.js';
import Sidebar from './pages/Sidebar.js';
import Footer from './pages/Footer.js';

function App() {
  return (<>
      <Header/>
        <div>
          <Section/>
          <Sidebar/>
        </div>
      <Footer/>
  </>);
}

export default App;
