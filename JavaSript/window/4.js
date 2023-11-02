var a = 10;

function b (){
    var x = 10;
}
console.log(a);
console.log(window.a);  //window will have anything which is in global space and not function
console.log(this.a);