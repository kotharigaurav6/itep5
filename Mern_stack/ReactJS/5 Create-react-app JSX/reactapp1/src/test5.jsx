function FirstComponent(){
    return <SecondComponent/>;
}

function SecondComponent(){
    return <ThirdComponent/>;
}

function ThirdComponent(){
    var content = <h1>This is an example of react</h1>
    var msg = <span>{content}</span>;
    return msg;
}

export default FirstComponent; 