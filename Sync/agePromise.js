
let agePromise = new Promise((resolve, reject) => {
    let age = 19;
    if (age >= 18) {
        resolve("Allowed");
    } else {
        reject("Not allowed");
    }
});

agePromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});