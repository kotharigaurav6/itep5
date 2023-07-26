var arr=[];

function getData(){
    var email = document.getElementById("email");
    if(email.value.trim()=="")   return false;

    var password = document.getElementById("password");
    if(password.value.trim()=="")   return false;

    var gender="";
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if(male.checked==false && female.checked==false)
    return false;

    (male.checked) ? gender=male.value : gender=female.value;

    var hobbies="";
    var cricket = document.getElementById("cricket");
    var hockey = document.getElementById("hockey");
    if(cricket.checked==false && hockey.checked==false)
    return false;

    (cricket.checked) ? hobbies+=cricket.value+" " : "";
    (hockey.checked) ? hobbies+=hockey.value : "";

    var subject = document.getElementById("subject");
    if(subject.selectedIndex==0) return false;

    //alert(email.value+"\n"+password.value+"\n"+gender+"\n"+hobbies+"\n"+subject.value);

    var obj={
        email:email.value,
        password:password.value,
        gender:gender,
        hobbies:hobbies,
        subject:subject.value 
    }
    console.log(obj);
    console.log(email.value+" "+password.value+" "+gender+" "+hobbies+" "+subject.value);

    var res = localStorage.getItem("entries");
    //alert(data);
    if(res){
        // alert("Holds some data");
        arr = JSON.parse(res);
        var flag=0;
        for(var index in arr){
            if(arr[index].email==obj.email){
                flag=1;
                break;
            }
        }   
        if(flag)
            alert("Email Already exist");
        else    
            arr = [...JSON.parse(res),obj];
    }else{
        arr.push(obj);
    }
    localStorage.setItem("entries",JSON.stringify(arr));
}