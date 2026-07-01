class Pen{
    color = "blue";
    type = "fountain"

    canWrite() {
        console.log("pen can write");
    }
}

let ob1 = new Pen();
let ob2 = new Pen(ob1);

console.log(ob2.color);
console.log(ob2.type);

ob2.canWrite();