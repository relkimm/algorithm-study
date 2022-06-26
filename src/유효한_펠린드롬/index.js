import { isalnum, len, lower } from "..";

function isPalindrome(target) {
  const filtered = [];

  for (const a of target) {
    if (isalnum(a)) {
      filtered.push(lower(a));
    }
  }
  if (len(filtered) === 0) {
    return false;
  }

  while (len(filtered) > 1) {
    if (filtered.shift() !== filtered.pop()) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("race a car"));
console.log(isPalindrome("hello010olleh"));
