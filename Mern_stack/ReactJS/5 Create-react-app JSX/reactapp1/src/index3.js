import React from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
    // return (<div>
    //     <h1>This is an example of Functional Component inside div</h1>
    // </div>);

    return React.createElement("div",null,React.createElement("h1",null,"This is an example of Functional Component inside div..."));
}

createRoot(document.getElementById("root")).render(<MyComponent/>);