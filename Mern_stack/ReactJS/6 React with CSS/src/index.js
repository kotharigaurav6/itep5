import React from 'react';
import {createRoot} from 'react-dom/client';
import styled from 'styled-components';

const MyParagraph = styled.p`
    background-color:grey;
    color:white;
    font-family:cursive;
    text-shadow:1px 1px 2px black;
`;
function FunComp1(){
    return (<MyParagraph>
        <h1>This is an example of FunComp1</h1>
        <span>This is span tag of functional component</span>
        <br/>
    </MyParagraph>);
}

createRoot(document.getElementById("root1")).render(<FunComp1/>);
