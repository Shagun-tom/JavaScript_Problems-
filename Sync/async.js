

let promise1 = new Promise((resolve, reject) => {
    console.log("HI");
    setTimeout(() => {
        console.log("Shagun");    
    }, 1000)
    console.log("Me");
})