let nums = [2, 3, 5, 7, 8, 91, 64, 73];

let n = nums.length;
let even = 0;
let odd = 0;

for (let i = 0; i < n; i++){
    if (nums[i] % 2 == 0) even++;
    else odd++;
}

console.log("Even : ", even);
console.log("Odd : ", odd);