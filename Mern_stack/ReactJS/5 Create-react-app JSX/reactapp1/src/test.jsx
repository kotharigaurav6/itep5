var content1 = <span>This is an example of React..</span>
var displayContent1 = <mark>{content1}</mark>

var content2 = <span>This is an example of React...</span>
var displayContent2 = <q>{content2}</q>

var content3 = <span>This is an example of React..!!</span>
var displayContent3 = <del>{content3}</del>

export default displayContent1;
export {displayContent2,displayContent3};