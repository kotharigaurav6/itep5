import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

//createRoot(document.getElementById("root")).render(<App name="Andrew" age="56"/>);

createRoot(document.getElementById("root")).render(<>
    <App name="Andrew" age="56"/>
    <App name="Andrew" age="56"/>
    <App name="Andrew" age="76"/>
</>);

/*
function MyComponent(){
    return (<>
    <App name="Andrew" age="56"/>
    <App name="Andrew" age="56"/>
    <App name="Andrew" age="56"/>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);
*/
