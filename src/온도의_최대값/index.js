const digree = [3, -2, -4, -9, 0, 3, 7, 13, 8, -3];

const n = 10;
const k = 2;

let sum = 0;
for (let i = 0; i < k; i++) {
  sum += digree[i];
}
let max = sum;

for (let i = k; i <= n - k; i++) {
  sum = sum + digree[i] - digree[i - k];
  if (sum > max) {
    max = sum;
  }
}

console.log("온도의 최대값", max);
