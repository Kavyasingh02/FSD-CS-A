function register(){
    waitfor5sec();
    console.log("resgiter end");
}
function sendEmail(){
    waitfor5sec();
    console.log("email was send")
}
function login(){
    waitfor5sec();
    console.log("login end");
}
function getData(){
    waitfor5sec();
    console.log("data was fetch")
}
function displayData(){
    waitfor5sec();
    console.log("Data display end");
}

function waitfor5sec(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms){

    }
}
register();
sendEmail();
login();
getData();
displayData();
console.log("call other application");