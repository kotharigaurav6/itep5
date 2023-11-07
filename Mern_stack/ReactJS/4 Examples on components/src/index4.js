import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Header from './Components/HeaderComponent';
import NavBar from './Components/NavBarComponent';
import Body from './Components/BodyComponent';

class MainComponent extends React.Component{
    render(){
        return (<>
            <Header/>
            <NavBar/>
            <Body/>
        </>);    
    }
}

createRoot(document.getElementById("root")).render(<MainComponent/>);