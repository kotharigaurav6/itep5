function getUserData(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user = {id : userId, name : "Andrew Anderson"};
            resolve(user);
        },1000);
    });
}

getUserData(123)
    .then((user)=>{
        return new Promise((resolve,reject)=>{
            var moreData = ["DataList1","DataList2","DataList3"];
            resolve({user,moreData});
        });
    }).then(data=>{
            console.log(data);
        }).catch();