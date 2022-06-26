import {
  getCharCode,
  compose,
  isSpace,
  isUpperAscii,
  toLowerAscii,
  filter,
  join,
  reduce
} from "..";

function solution(input) {
  if (typeof input !== "string") {
    return input;
  }
  return input.replace(/\s/gi, "").toLowerCase();
}

// const result = solution("bE      aUti ful");
// console.log("영어단어 복구", result);

function solution2(input) {
  if (typeof input !== "string") {
    return input;
  }
  const result = [];
  for (const char of input) {
    if (!isSpace(char)) {
      const isUpperChar = compose(getCharCode, isUpperAscii)(char);
      if (isUpperChar) {
        const lowerChar = compose(
          getCharCode,
          toLowerAscii,
          String.fromCharCode
        )(char);
        result.push(lowerChar);
      } else {
        result.push(char);
      }
    }
  }
  return result.join("");
}

// const result2 = solution2("bE      aUti ful");
// console.log("영어단어 복구", result2);

const isUpperChar = compose(getCharCode, isUpperAscii);
const toLowerChar = compose(getCharCode, toLowerAscii, String.fromCharCode);
const isNotSpace = (char) => !isSpace(char);

function solution3(input) {
  return compose(
    filter(isNotSpace),
    reduce((acc, curr) => {
      if (isUpperChar(curr)) {
        const lowerChar = toLowerChar(curr);
        acc.push(lowerChar);
      } else {
        acc.push(curr);
      }
    }, []),
    join("")
  )(input);
}

const result3 = solution3("bE      aUti ful");
console.log("영어단어 복구", result3);
