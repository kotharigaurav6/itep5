import React from 'react';
import {createRoot} from 'react-dom/client';

var myStyle = {
                style1 : {
                    fontSize:"70px",
                    color:"blue"
                },
                style2 : {
                    fontSize:"20px",
                    color:"green",
                    textTransform:"uppercase"
                }
            }

var content = <p style={myStyle.style1}>
    This is an example of showing the concept of css.
    <h1 style={myStyle.style2}>Differnt ways to implement CSS</h1>
</p>

createRoot(document.getElementById("root")).render(content);