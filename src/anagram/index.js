import { range } from "..";

function solution(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  }
  function parse(a) {
    const array = [];
    for (const char of a) {
      const charCode = char.charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        const upperIndex = charCode - 65;
        if (array[upperIndex]) {
          array[upperIndex]++;
        } else {
          array[upperIndex] = 1;
        }
      } else {
        const lowerIndex = charCode - 71;
        if (array[lowerIndex]) {
          array[lowerIndex]++;
        } else {
          array[lowerIndex] = 1;
        }
      }
    }
    return array;
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
