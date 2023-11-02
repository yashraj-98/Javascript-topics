const array = [1,3,5,7,9];

const output = array.map(function double(x){
    return x * 2;
});
console.log(output);

const output1 = array.map((x) => { return x * 3;});
console.log(output1);

const output2 = array.map((x) => { return x.toString(2);});
console.log(output2);