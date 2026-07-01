let myPromise = new Promise((resolve, reject) => {
    reject("Something went wrong.");
});

myPromise.catch((message)=>{
    console.log(message);
});