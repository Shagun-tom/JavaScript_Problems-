function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
};

async function countdown() {
    for (let i = 3; i >= 1; i--){
        console.log(i);
        await delay(1000);
    }
    console.log("Go!");
}

countdown();