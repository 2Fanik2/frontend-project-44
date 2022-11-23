import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateRound = () => {
  const num = getRandomInRange(0, 100);
  let answer = 'yes';
  let divisors = 0;
  let count = 1;
  while (count <= num) {
    if (num % count === 0) {
      divisors += 1;
    }
    if (divisors > 2) {
      answer = 'no';
      break;
    }
    count += 1;
  }

  return [num, answer];
};

export default function runGamePrime() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, generateRound);
}
