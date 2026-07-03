async function demo() {
    console.log(1);
    await 10;
    console.log(2);
}

console.log(0);
demo();
console.log(3);