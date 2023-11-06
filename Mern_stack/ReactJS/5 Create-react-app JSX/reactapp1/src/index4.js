import React from 'react';
import {createRoot} from 'react-dom/client';

var content1 = <span>This is an example of React</span>
var displayContent1 = <mark>{content1}</mark>

var content2 = <span>This is an example of React</span>
var displayContent2 = <q>{content2}</q>

var content3 = <span>This is an example of React</span>
var displayContent3 = <del>{content3}</del>

createRoot(document.getElementById("root1")).render(displayContent1);
createRoot(document.getElementById("root2")).render(displayContent2);
createRoot(document.getElementById("root3")).render(displayContent3);