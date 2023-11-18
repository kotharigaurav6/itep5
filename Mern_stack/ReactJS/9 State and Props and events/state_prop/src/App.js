import logo from './logo.svg';
import './App.css';

function App(props) {
  return (<>
         <h3>Hey {props.name}, your age is {props.age}</h3>
  </>);
}

export default App;
