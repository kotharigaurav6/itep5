import React from 'react';
import {createRoot} from 'react-dom/client';

function FunctionalComponent(){
    return (<>
        <h2>This is an example of Functional Component</h2>
    </>);
}
class ClassComponent extends React.Component{
    render(){
        return (<>
            <h2>This is an example of Class Component</h2>        
            </>);
    };
}

function MainComponent(){
    return (<>
            <FunctionalComponent/>
            <ClassComponent/>
        </>);
}
createRoot(document.getElementById("root")).render(<MainComponent/>);
