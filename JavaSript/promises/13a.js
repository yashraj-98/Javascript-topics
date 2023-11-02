const GITHUB_API = "https://github.com/yashraj-98";
const promise_user = fetch(GITHUB_API);
console.log(promise_user);

promise_user.then(function (data){
    console.log(data);   // here the data which is fetched in promise_user is stored in data
})