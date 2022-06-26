import { isUpperAscii, range } from "..";

function solution(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  }

  function parse(a) {
    const array = [];
    for (const char of a) {
      const charCode = char.charCodeAt();
      if (isUpperAscii(charCode)) {
        count1(array, charCode - 65);
      } else {
        count1(array, charCode - 71);
      }
    }
    return array;
  }

  function count1(array, index) {
    if (array[index]) {
      array[index]++;
    } else {
      array[index] = 1;
    }
  }

  const x = parse(a);
  const y = parse(b);

  for (const i of range(52)) {
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
}

console.log("anagram", solution("AnaGraM", "MraGanA"));
