// object clone

let src = {
    name : "Shagun",
    age : 19,
    roll_no : 67
};

// first method

// let des = { ...src };
// console.log(src);
// console.log(des);

// src.name = "Bhoomi";

// console.log(src);
// console.log(des);

// 2nd method

let des = Object.assign({}, src);

src.name = "Bhoomi";
console.log(src);
console.log(des)