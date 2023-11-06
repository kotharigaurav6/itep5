import React from 'react';
import {createRoot} from 'react-dom/client';

var myStyle = {
                fontSize:"70px",
                color:"blue"
            }

var content = <p style={myStyle}>
    This is an example of showing the concept of css
</p>

createRoot(document.getElementById("root")).render(content);