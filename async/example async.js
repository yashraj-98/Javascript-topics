const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value 2!!");
  }, 30000);
});
// await can only be used inside an async function 
async function handlePromise() {
console.log("Hello World!!");

const val = await p1;
console.log("Namaste JavaScript");
console.log(val);

const val2 = await p2;
console.log("Namaste JavaScript 2");
console.log(val2);
}
handlePromise();
