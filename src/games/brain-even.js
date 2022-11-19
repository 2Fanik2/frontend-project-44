import runGame from '../index.js';
import generateRandomInRange from '../utils.js';

export default function runGameEven() {
  const roundGenerate = () => {
    const rundomNumber = generateRandomInRange(0, 100);
    let answer = '';
    if (rundomNumber % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }

    return [rundomNumber, answer];
  };
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, roundGenerate);
}
