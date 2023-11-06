var showDetails = (object)=>{
  //  return object.cid+" "+object.username+" "+object.email;
  //return `${object.cid} ${object.username} ${object.email}`;
    return `Hello ${object.username} , Your Customer Id is ${object.cid} ,you can connect with us by your registerd email id which is ${object.email}.`;
}

var customerObj = {
    cid : "CUST00123",
    username : "andrew_123",
    email : "andrew@gmail.com"
}

var result = <h2>{showDetails(customerObj)}</h2>
export default result;