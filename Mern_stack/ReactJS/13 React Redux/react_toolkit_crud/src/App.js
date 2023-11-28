import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Section from './pages/Section';
import SideBar from './pages/SideBar';

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
