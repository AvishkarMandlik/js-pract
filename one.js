// in this following exapmle var is function scope and let and const is block or braces scope
function abcd(){
    for( var i=0; i<12; i++ ){
        console.log(i);
    }
    console.log(i);
}
abcd();

// output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12

function abc(){
    for( let i=0; i<12; i++ ){
        console.log(i);
    }
    console.log(i); // it showing error message i is not defined 
}
abc();

// output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11   
// i is not defined


// In following example var is adding in window object and let and const cannot add
// var a = 10;
// let b = 20;
// const c = 30;


// copying of  refrence values usinf spred(...) operator
var a = [1, 2, 3, 4]
console.log(a);
// a.pop(); 
console.log(a); // orignal array is changed
var  b = [...a];
b.pop(); 
console.log(b);
console.log(a); // original array is not changed

