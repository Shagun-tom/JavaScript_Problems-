let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = nums.length;

for (let i = 0; i < n/2; i++){
    let temp = nums[i];
    nums[i] = nums[n - 1 - i];
    nums[n - 1 - i] = temp;
}

for (let i = 0; i < n; i++){
    console.log(nums[i]);
}