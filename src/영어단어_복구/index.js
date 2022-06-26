function solution(input) {
  if (typeof input !== "string") {
    return input;
  }
  return input.replace(/\s/gi, "").toLowerCase();
}

const result = solution("bE      aUti ful");
console.log("영어단어 복구", result);
