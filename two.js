// truthy and falsy values 
//  falsy values  =  0, false, undefined, null, NaN,  document.all others are truthy values.


// LOOPS

// foreach loops only work on array operations like retrivin  elements

// let a = [1,2,3,4,5,6,7,8];
// a.forEach(function(value){
//     console.log(value + 2);
// });

//  for in loops only work on Object 

// let  obj  = {
//     name : "Avishkar",
//     age  : 22,
//     gender : "male"
// }

// for(let key in obj) {
//     console.log(key, ":",obj[key]);//values retrive using  object name and variable name
// }



// js mein array ek object ke format mai convert hota hai behind the scence
// check array or object 
let a = [1,2,3,4,5,6,7,8];
console.log(Array.isArray([a]));//true
console.log(Array.isArray({a}));//false


const deatils = {
    name:"Avishkar",
    age:22,
    gender:"male",
    address:"Pune"
}
delete deatils.address, delete deatils.age; // delete object groups or any key and value
console.log(deatils);