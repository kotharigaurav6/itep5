import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

function Header(){
    return (<>
        <h1>Header Component</h1>
        <h6>This is a Header Component</h6>
    </>);
}
function NavBar(){
    return (<>
        <h1>NavBar Component</h1>
        <h6>This is a NavBar Component</h6>
    </>);
}
function Body(){
    return (<>
        <h1>Body Component</h1>
        <h6>This is a Body Component</h6>
    </>);
}
function MainComponent(){
    return (<>
        <Header/>
        <NavBar/>
        <Body/>
    </>);
}

createRoot(document.getElementById("root")).render(<MainComponent/>);