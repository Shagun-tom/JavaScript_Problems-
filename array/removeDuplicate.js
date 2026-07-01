let nums = [1, 2, 2, 3, 4, 5, 5, 6, 2];

let arrs = [12, 21, 12, 32, 14, 15, 32, 6, 2];


let unique = nums.filter((value, index, self) => {
    return self.indexOf(value) == index;
});

console.log(unique);

let arr = [...new Set(arrs)];

console.log(arr);