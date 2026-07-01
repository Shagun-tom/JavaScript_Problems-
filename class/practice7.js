let src = {
    name : "Shagun",
    age : 18,
    roll_no: 26
};

let des = {};
for (key in src) {
    let newkey = key;
    let newValue = src[key];
    des[newkey] = newValue;
}

console.log(src);
console.log(des);

src.age = 19;

console.log(src);
console.log(des);