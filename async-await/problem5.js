async function test() {
    try {
        const result = await Promise.reject("Something went wrong");
        console.log(result);
    } catch (err) {
        console.log("Caught:", err);
    }

    console.log("Finished");
}

test();