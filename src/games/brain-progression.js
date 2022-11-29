import runGame from '../index.js';
import getRandomInRange from '../utils.js';

function buildingOfProgressive(intervalOfProgression) {
  let itemOfProgression = intervalOfProgression;
  const result = [intervalOfProgression];

  for (let i = 1; i < 10; i += 1) {
    itemOfProgression += intervalOfProgression;
    result.push(itemOfProgression);
  }

  return result;
}

const generateRound = () => {
  const intervalOfProgression = getRandomInRange(1, 10);

  const progressive = buildingOfProgressive(
    intervalOfProgression,
  );

  const randomNumberSecret = getRandomInRange(0, 9);
  const answer = String(progressive[randomNumberSecret]);
  progressive[randomNumberSecret] = '..';

  let question = '';
  for (let number = 0; number < progressive.length; number += 1) {
    question = `${question}${progressive[number]} `;
  }

  return [question, answer];
};

export default function runGameProgress() {
  const description = 'What number is missing in the progression?';
  runGame(description, generateRound);
}
