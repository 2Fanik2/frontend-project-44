import _ from 'lodash';
import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

function calculateGreatestDivisors(num) {
  const divisors = [];
  for (let m = 1; m <= num; m += 1) {
    if (num % m === 0) {
      divisors.push(m);
    }
  }
  return divisors;
}

const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);
  const question = `${num1} ${num2}`;

  let integerAnswer = 1;
  const divisors = _.intersection(calculateGreatestDivisors(num1), calculateGreatestDivisors(num2));

  for (let b = 0; b < divisors.length; b += 1) {
    if (integerAnswer < divisors[b]) {
      integerAnswer = divisors[b];
    }
  }
  const answer = String(integerAnswer);
  return [question, answer];
};

export default function runGameGCD() {
  runGame(description, generateRound);
}
