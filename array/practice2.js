let arr = [4, 2, 7, 8, 4, 67, 83, 24];

let n = arr.length;

let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;

for (let i = 0; i < n; i++){
    if (max < arr[i]) {
        max = arr[i];
    }
    if (min > arr[i]) min = arr[i]; 
}

console.log("max element : ", max);
console.log("min element : ", min);