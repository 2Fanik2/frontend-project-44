import runGame from '../index.js';
import randomInteger from '../utils.js';

export default function runGamePrime() {
  const roundGenerate = () => {
    const result = [];
    const rundomNumber = randomInteger(0, 100);
    let answer = 'yes';
    let divisors = 0;
    let count = 1;
    while (count <= rundomNumber) {
      if (rundomNumber % count === 0) {
        divisors += 1;
      }
      if (divisors > 2) {
        answer = 'no';
        break;
      }
      count += 1;
    }
    result.push(rundomNumber, answer);

    return result;
  };

  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, roundGenerate);
}
