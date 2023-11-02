const p = new Promise((resolve,reject) => {
    resolve("promise resolved value");
});

async function handlePromise(){
    const val = await p;
    console.log(val);
}
handlePromise();