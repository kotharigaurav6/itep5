function getUserData(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user = {id : userId, name : "Andrew Anderson"};
            resolve(user);
        },1000);
    });
}

function getMoreData(user){
    return new Promise((resolve,reject)=>{
        var moreData = ["DataList1","DataList2","DataList3"];
        resolve({user,moreData});
    });
}
getUserData(123)
    .then(getMoreData)
        .then(data=>{
            console.log(data);
        }).catch();