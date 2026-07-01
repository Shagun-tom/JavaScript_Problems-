let numberPromise2 = new Promise((resolve, reject) => {
    resolve(5);
});
numberPromise2.then((message) => {
    return 2 * message;
}).then((message) => {
    console.log(message);
})