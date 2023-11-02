
/*
var x= 10;
function sum(a,b){
    var sum = a+b;
    return sum;
}
---normal code
sum();
console.log(x);*/

sum();
console.log(x);
console.log(sum);

var x= 10;
function sum(a,b){
    var sum = a+b;
    return sum;
}
//hoisting--- x is undefined not Not defined because function and var get memory allocation before getting invoked.