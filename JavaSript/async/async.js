const p = new Promise((resolve,reject) => {
    resolve("promise resolved value");
});
//---async always returns a value
async function getData(){
    return p;
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));