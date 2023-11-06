import React from 'react';
import {createRoot} from 'react-dom/client';

/*
var content = <h1>hELLO uSER, tHIS IS AN EXAMPLE OF rEACT</h1>
ReactDOM.render(content,document.getElementById("root"));
*/

var content = <h1>hELLO uSER, tHIS IS AN EXAMPLE OF rEACT..!!</h1>

// var element = document.getElementById("root");
// var root = createRoot(element);
// root.render(content);

createRoot(document.getElementById("root")).render(content);