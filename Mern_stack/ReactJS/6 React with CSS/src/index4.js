import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

var content = <p className="paraBackground">
    This is an example of showing the concept of css.
    <h1 id="headingBackground">Differnt ways to implement CSS</h1>
    <span>Internal css</span>
</p>

createRoot(document.getElementById("root")).render(content);