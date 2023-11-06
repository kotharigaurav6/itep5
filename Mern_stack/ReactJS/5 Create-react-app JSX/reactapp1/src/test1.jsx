function DisplayContent1(){
    var content1 = <span>This is an example of React..</span>
    var displayContent1 = <mark>{content1}</mark>    
    return displayContent1;
}

function DisplayContent2(){
    var content2 = <span>This is an example of React...</span>
    var displayContent2 = <q>{content2}</q>
    return displayContent2;
}

function DisplayContent3(){
    var content3 = <span>This is an example of React..!!</span>
    var displayContent3 = <del>{content3}</del>
    return displayContent3;
}

export default DisplayContent1;
export {DisplayContent2,DisplayContent3};