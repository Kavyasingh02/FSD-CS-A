function register(cb){
    return new Promise((resolve, reject) => {
           setTimeout(()=>{
       console.log("register end");
       resolve();
   },9000)
    })
}
function sendEmail(cb){
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
       console.log("email was send");
       resolve();
   },2000) 
    })
}

function login(cb){
    return new Promise((resolve, reject) => {
          setTimeout(()=>{
       console.log("login end");
       reject("login failed");
   },4000)
    })
}
function getData(cb){
     return new Promise((resolve, reject) => {
          setTimeout(()=>{
       console.log("data was fetch");
       resolve();
   },4000)
    })
}
function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
       console.log("Data display end");
       resolve();
   },3000)
    })
}

//callback hell
// register(()=>{
//     sendEmail(()=>{
//         login(()=>{
//             getData(()=>{
//                 displayData();
//             })
//         })
//     })
// })
// sendEmail();
// login();
// getData();
// displayData();


//using Promise
// register().then(sendEmail)
//           .then(login)
//           .then(getData)
//           .then(displayData)
//           .catch((err)=>{
//             console.log("Error "+err);

//           })
//           .finally(()=>{
//             console.log("outside promise")
//           });


 async function f1(){
    try{
    await register();
     await  sendEmail();
     await login();
    await  getData();
    await  displayData();
    }
    catch(err){
        console.log("login failed"+err);
    }
}
f1();
console.log("call other application");