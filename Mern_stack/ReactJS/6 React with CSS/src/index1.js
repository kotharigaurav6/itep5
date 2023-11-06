import React from 'react';
import {createRoot} from 'react-dom/client';

var content = <p style={{fontSize:"70px",color:"Red"}}>
    This is an example of showing the concept of css
</p>

createRoot(document.getElementById("root")).render(content);
