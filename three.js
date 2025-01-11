// Callback function 
// it is a simple function its like giving a task to someone and asking then to notify you when they are done
setTimeout(function() {
     console.log("2 Sec") //ye koi bhi task hume 2000 sec ke bad chahiye to function mei daldo
},2000)

//First class funcction
// it is function in which in when calling the function in this calling passed the other function as a value
function a(a){
    a();
}
a(function b(){ console.log("Hello Simple Function")}) //SIMPLE FUNCTION
a(function(){ console.log("Hello Anonymous Function")}) //ANONYMOUS FUNCTION || NoName function
a(()=>{ console.log("Hello Arrow Function")}) //ARROW FUNCTION