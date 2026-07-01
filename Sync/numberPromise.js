let numberPromise = new Promise((reject, resolve) => {// syntax is Promise((resolve, reject)) if we write reject first then code still treat it as resolve and it run then,d
    reject(20);
});
numberPromise.then((message) => {
    console.log(2 * message);
}).catch((message) => {
    console.log(message);
});