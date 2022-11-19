import runGame from '../index.js';
import generateRandomInRange from '../utils.js';

const roundGenerate = () => {
  const intervalOfProgression = generateRandomInRange(1, 10);
  const progressive = [intervalOfProgression];
  let itemOfProgression = intervalOfProgression;

  for (let i = 1; i < 10; i += 1) {
    itemOfProgression += intervalOfProgression;
    progressive.push(itemOfProgression);
  }

  const randomNumberSecret = generateRandomInRange(0, 9);
  const answer = String(progressive[randomNumberSecret]);
  progressive[randomNumberSecret] = '..';

  let question = 'Question:';
  for (let number = 0; number < progressive.length; number += 1) {
    question = `${question} ${progressive[number]}`;
  }

  return [question, answer];
};

export default function runGameProgress() {
  const description = 'What number is missing in the progression?';
  runGame(description, roundGenerate);
}
