let src = {
    name : "Shagun",
    age : 18,
    roll_no: 26
};

let src2 = {
    course : "BTech",
    specialization : "CSE"
};

let des = Object.assign({}, src, src2);

console.log(src);
console.log(des);