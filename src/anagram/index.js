import { range } from "..";

function solution(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  }

  const x = [];
  const y = [];
  for (const char of a) {
    const charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      const upperIndex = charCode - 65;
      if (x[upperIndex]) {
        x[upperIndex]++;
      } else {
        x[upperIndex] = 1;
      }
    } else {
      const lowerIndex = charCode - 71;
      if (x[lowerIndex]) {
        x[lowerIndex]++;
      } else {
        x[lowerIndex] = 1;
      }
    }
  }

  for (const char of b) {
    const charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      const upperIndex = charCode - 65;
      if (y[upperIndex]) {
        y[upperIndex]++;
      } else {
        y[upperIndex] = 1;
      }
    } else {
      const lowerIndex = charCode - 71;
      if (y[lowerIndex]) {
        y[lowerIndex]++;
      } else {
        y[lowerIndex] = 1;
      }
    }
  }

  for (const i of range(52)) {
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
}

console.log("anagram", solution("AnaGraM", "MraGanA"));
