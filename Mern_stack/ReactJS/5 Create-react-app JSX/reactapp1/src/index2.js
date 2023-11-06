import React from 'react';
import {createRoot} from 'react-dom/client';

function MyComponent(){
//    return <h1>This is an example of Functional Component</h1>;
    return React.createElement("h1",null,"This is an example of Functional Component..!!");
}

createRoot(document.getElementById("root")).render(<MyComponent/>);