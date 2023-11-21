import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (<>
  <Router>
      <Header/>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </Router>
  </>);
}

export default App;
