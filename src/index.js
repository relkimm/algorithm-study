import "./석차_구하기";
// import "./유효한_펠린드롬";
// import "./온도의_최대값";
// import "./영어단어_복구";
// import "./anagram";

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

export function space() {
  return " ";
}

export function isSpace(char) {
  if (typeof char !== "string") {
    return false;
  }
  return char === space();
}

export function isUpperCase(char) {
  if (typeof char !== "string") {
    return false;
  }
  return isUpperAscii(char.charCodeAt());
}

export function isLowerCase(char) {
  if (typeof char !== "string") {
    return false;
  }
  return isLowerCase(char.charCodeAt());
}

export function isUpperAscii(charcode) {
  return charcode >= 65 && charcode <= 90;
}

export function toLowerAscii(charcode) {
  return charcode + 32;
}

export function getCharCode(char) {
  if (typeof char !== "string") {
    return undefined;
  }
  return char.charCodeAt();
}

export function compose(...fns) {
  return function (v) {
    return fns.reduce((acc, fn) => fn(acc), v);
  };
}

export function map(transform, data) {
  const next = [];
  for (const a of data) {
    next.push(transform(a));
  }
  return next;
}

export function filter(predicate) {
  return function (data) {
    const next = [];
    for (const a of data) {
      if (predicate(a)) {
        next.push(a);
      }
    }
    return next;
  };
}

export function reject(predicate) {
  return function (data) {
    const next = [];
    for (const a of data) {
      if (!predicate(a)) {
        next.push(a);
      }
    }
    return next;
  };
}

export function reduce(reducer, initValue) {
  return function (data) {
    let acc = initValue;
    for (const a of data) {
      reducer(acc, a);
    }
    return acc;
  };
}

export function join(seperator) {
  return function (data) {
    return data.join(seperator);
  };
}

export function range(limit) {
  const next = [];
  for (let i = 0; i < limit; i++) {
    next.push(i);
  }
  return next;
}
