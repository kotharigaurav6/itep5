import React from 'react';
import {createRoot} from 'react-dom/client';
/*
import displayContent1,{displayContent2,displayContent3} from './test';

createRoot(document.getElementById("root1")).render(displayContent1);
createRoot(document.getElementById("root2")).render(displayContent2);
createRoot(document.getElementById("root3")).render(displayContent3);
*/

import MyDefaultComponent,{DisplayContent2,DisplayContent3} from './test1';

createRoot(document.getElementById("root1")).render(<MyDefaultComponent/>);
createRoot(document.getElementById("root2")).render(<DisplayContent2/>);
createRoot(document.getElementById("root3")).render(<DisplayContent3/>);