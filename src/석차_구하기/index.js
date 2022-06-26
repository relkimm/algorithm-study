import { len } from "../index";

const scores = [80, 85, 90, 100, 95, 90];
const ranking = [];

for (let i = 0; i < len(scores); i++) {
  ranking.push(1);
}

for (let i = 0; i < len(scores); i++) {
  for (let j = 0; j < len(scores); j++) {
    if (scores[j] > scores[i]) {
      ranking[i] = ranking[i] + 1;
    }
  }
}

console.log("석차", ranking);
