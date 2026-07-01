let promise1 = new Promise((resolve, reject) => {
    resolve("Done");
    reject("Error!");
});

promise1.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})