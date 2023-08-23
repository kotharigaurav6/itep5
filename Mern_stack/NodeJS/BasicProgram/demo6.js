// Examples based on callback

function getResult(task,callback){
    setTimeout(()=>{
        console.log(task);
        callback();
    },3000);
}

function taskCompleted(){
    console.log(`Task Completed`);
}
getResult('Email Sent',taskCompleted);


