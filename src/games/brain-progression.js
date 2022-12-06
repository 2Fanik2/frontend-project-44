import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'What number is missing in the progression?';

function buildingOfProgressive(
  intervalOfProgression,
  firstItemOfProgression,
  lengthOfProgression,
) {
  const result = [firstItemOfProgression];
  let itemOfProgression = firstItemOfProgression;

  for (let i = 1; i < lengthOfProgression; i += 1) {
    itemOfProgression += intervalOfProgression;
    result.push(itemOfProgression);
  }

  return result;
}

const generateRound = () => {
  const intervalOfProgression = getRandomInRange(1, 10);
  console.log(intervalOfProgression);
  const firstItemOfProgression = getRandomInRange(0, 10);
  console.log(firstItemOfProgression);
  const lengthOfProgression = getRandomInRange(5, 10);
  console.log(lengthOfProgression);

  const progressive = buildingOfProgressive(
    intervalOfProgression,
    firstItemOfProgression,
    lengthOfProgression,
  );

  const randomNumberSecret = getRandomInRange(0, lengthOfProgression - 1);
  const answer = String(progressive[randomNumberSecret]);
  progressive[randomNumberSecret] = '..';

  let question = '';
  for (let number = 0; number < progressive.length; number += 1) {
    question = `${question}${progressive[number]} `;
  }

  return [question, answer];
};

export default function runGameProgress() {
  runGame(description, generateRound);
}
