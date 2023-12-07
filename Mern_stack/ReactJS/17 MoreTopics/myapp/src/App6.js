// Higher Order Component

import logo from './logo.svg';
import './App.css';

// HOC (Higher Order Component)
function myFunction(DisplayText){
  return function AnotherDisplayText(props){
    const modifyContent = {
      ...props,
      text : props.text.toUpperCase()
    }
    return (<>
      <br/>
      <DisplayText {...modifyContent}/>
    </>);
  };
}
const DisplayText = ({text})=>{
  return (<>{text}</>);
}
const DisplayUpperCaseText = myFunction(DisplayText);
function App() {
  return (<>
        <DisplayText text = "example of hoc"/>
        <DisplayUpperCaseText text = "example of hoc in another component"/>
  </>);
}

export default App;
