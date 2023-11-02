//---sum 
const a = [1,3,5,7,9];
function sum(a){
    let s = 0;
    for(let i = 0; i < 5; i++){
        s = s+a[i];
    }   
    return s;
}
console.log(sum(a));

//---with reduce
output = a.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output);



//---max

function maximum(a){
    let max = 0;
    for(let i=0; i<a.length; i++){
        if(a[i] > max){
           max = a[i];
        }
    }
    return max;
}
console.log(maximum(a));

//---maximum with reduce
 
const output1 = a.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max;
},0);
console.log(output1);