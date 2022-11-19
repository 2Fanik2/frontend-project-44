import _ from 'lodash';
import runGame from '../index.js';
import generateRandomInRange from '../utils.js';

const roundGenerate = () => {
  const firstRundomNumber = generateRandomInRange(0, 100);
  const twoRundomNumber = generateRandomInRange(0, 100);
  const question = `${firstRundomNumber} ${twoRundomNumber}`;

  let integerAnswer = 1;

  const firstDivisors = [];
  const twoDivisors = [];

  for (let m = 1; m <= firstRundomNumber; m += 1) {
    if (firstRundomNumber % m === 0) {
      firstDivisors.push(m);
    }
  }

  for (let count = 1; count <= twoRundomNumber; count += 1) {
    if (twoRundomNumber % count === 0) {
      twoDivisors.push(count);
    }
  }

  const divisors = _.intersection(firstDivisors, twoDivisors);

  for (let b = 0; b < divisors.length; b += 1) {
    if (integerAnswer < divisors[b]) {
      integerAnswer = divisors[b];
    }
  }
  const answer = String(integerAnswer);
  return [question, answer];
};

export default function runGameGCD() {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, roundGenerate);
}
