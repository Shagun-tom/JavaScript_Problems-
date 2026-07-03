console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve(); //await always pauses the async function, even if the Promise is already resolved.
    console.log("C");
}
test();
console.log("D");