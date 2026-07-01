
let delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Finished waiting");
    }, 2000); 
});

delayPromise.then((message) => {
    console.log(message);
})