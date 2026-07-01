let curr = new Date();
console.log("curr date : ", curr);

let d1 = new Date("December 17, 1995 03:24:00");
console.log(d1);

let d2 = Date.now();
console.log(d2);

let d3 = Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
console.log(d3);

console.log(curr.toJSON());