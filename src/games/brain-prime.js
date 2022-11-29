import runGame from '../index.js';
import getRandomInRange from '../utils.js';

function isPrime(num) {
  let divisors = 0;
  let count = 1;
  while (count <= num) {
    if (num % count === 0) {
      divisors += 1;
    }
    if (divisors > 2) {
      break;
    }
    count += 1;
  }
  return !(divisors > 2);
}

const generateRound = () => {
  const num = getRandomInRange(1, 100);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default function runGamePrime() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, generateRound);
}
