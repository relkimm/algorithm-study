// import "./석차_구하기";
// import "./유효한_펠린드롬";
// import "./온도의_최대값";
import "./영어단어_복구";

export function len(target) {
  return target.length;
}

export function isalnum(target) {
  if (!target) {
    return false;
  }
  const exp = new RegExp(/^[a-zA-Z0-9]*$/);
  return exp.test(target);
}

export function lower(target) {
  if (typeof target === "string") {
    return target.toLowerCase();
  }
  return target;
}
