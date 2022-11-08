import runGame from '../index.js';
import randomInteger from '../utils.js';

export default function runGameEven() {
  const roundGenerate = () => {
    const result = [];
    const rundomNumber = randomInteger(0, 100);
    let answer = '';
    if (rundomNumber % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    result.push(rundomNumber, answer);

    return result;
  };
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, roundGenerate);
}
