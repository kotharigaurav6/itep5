function myfun(operator){
    //alert(operator+" "+(operator=="+"));
    var data;

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    //alert(num1+num2);    

//            document.getElementById("res").innerHTML="Result : "+(num1+num2);
//            document.getElementById("add").value="Add: "+(num1+num2);

    if(operator=="+")
        data = num1+num2;
    else if(operator=="-")
        data = num1-num2;    
    else if(operator=="*")
        data = num1*num2;    
    else if(operator=="%")
        data = num1%num2; 
    else if(operator=="/")
        data = num1/num2;    

    document.getElementById("result").value = data;
}
