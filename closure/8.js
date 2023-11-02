//Example 1
function x(){
    var a = 5;

    function y(){
        console.log(a);
    }
    y();
}
x(); 

//Example 2:
function x(){
    var a = 5;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x(); //---full funtion y will be the output.

//Example 3
function x(){
    var a = 5;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();  //z has the function y in it so it will return 5