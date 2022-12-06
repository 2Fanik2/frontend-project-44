import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomInRange(0, 100);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default function runGameEven() {
  runGame(description, generateRound);
}
