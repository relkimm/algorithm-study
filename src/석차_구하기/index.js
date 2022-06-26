import { len, range } from "../index";

const scores = [80, 85, 90, 100, 95, 90];
const ranking = [];

for (const _ of range(len(scores))) {
  ranking.push(1);
}

for (const i of range(len(scores))) {
  for (const j of range(len(scores))) {
    if (scores[j] > scores[i]) {
      ranking[i]++;
    }
  }
}

console.log("석차", ranking);
