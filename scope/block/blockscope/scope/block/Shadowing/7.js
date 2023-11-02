
//--- block scope : whatever funcs. and var are accessible in a block

//---SHADOWING

var a = 10;
let b = 20;
const c = 30; 
{
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a);
    console.log(b);     // --- var remains same after reassign as its in global scope
    console.log(c);     // --- let and const are in different scope so they change in block scope but again changes in local scope
}
console.log(a);
console.log(b);
console.log(c);
