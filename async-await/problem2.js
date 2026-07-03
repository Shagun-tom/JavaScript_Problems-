async function greet() {
    return "Hello";// return promise 
}
async function main(params) {
    const message = await greet(); // wait till promise fulfill , when promise fulfill then await unwrap it and resolve it give value to the message in string form.
    console.log(message);
}
main();