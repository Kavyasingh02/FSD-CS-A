
// console.log(a);
// var a;
// var b=6;
// var c=10;
// {   let d=11;
//     const f=11;
//     console.log(b);
//     console.log(c);
//     console.log(f);
// }
// console.log(b);
// console.log(c);


function hello(user="Guest"){
    console.log(`hello ${user}`);   
}
hello();
hello("kavya");

function sum(a=1,b=1){
    console.log("before return");
    return a+b;
    console.log("after return");
}
const value=sum(1,1);
console.log("sum"+value);

const add=(a=5,b=12)=>a+b;
console.log(add());


(function(){
 console.log('Inside IIFE');
})();

function f1(user,callback){
   console.log(`Hello ${user}`);
   callback();
}

f1("admin",()=>{
    console.log(add(3,5))
});