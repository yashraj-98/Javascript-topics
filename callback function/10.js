
//Example 2

function addevent(){
    let a = 0;
    document.getElementById("clickMe").addEventListener("click", function abc(){
        console.log("I am Dead", ++a);
    });
}
addevent();