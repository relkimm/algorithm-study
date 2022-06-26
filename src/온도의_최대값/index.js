const digree = [3, -2, -4, -9, 0, 3, 7, 13, 8, -3];

const n = 10;
const k = 2;

let max = digree[0] + digree[1];
let sum = digree[0] + digree[1];

for (let i = 2; i <= n - k; i++) {
  sum = sum + digree[i] - digree[i - k];
  if (sum > max) {
    max = sum;
  }
}

console.log("온도의 최대값", max);
