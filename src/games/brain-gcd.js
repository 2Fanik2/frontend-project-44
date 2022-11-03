import _ from 'lodash';
import runGame from '../index.js';

export default function runGameGCD() {
  const roundGenerate = () => {
    const result = [];
    const firstRundomNumber = Math.floor(Math.random() * 100) + 1;
    const twoRundomNumber = Math.floor(Math.random() * 100) + 1;
    const questionsNumbers = `${firstRundomNumber} ${twoRundomNumber}`;

    let answer = 1;
    // Вычисляем наибольший делитель
    const firstDivisors = [];
    const twoDivisors = [];
    // Находим все делители первого числа
    for (let m = 1; m <= firstRundomNumber; m += 1) {
      if (firstRundomNumber % m === 0) {
        firstDivisors.push(m);
      }
    }
    // Находим все делители второго числа
    for (let count = 1; count <= twoRundomNumber; count += 1) {
      if (twoRundomNumber % count === 0) {
        twoDivisors.push(count);
      }
    }
    // Находим общие делители
    const divisors = _.intersection(firstDivisors, twoDivisors);
    // Находим наибольший делитель

    for (let b = 0; b < divisors.length; b += 1) {
      if (answer < divisors[b]) {
        answer = divisors[b];
      }
    }
    result.push(questionsNumbers, String(answer));

    return result;
  };
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, roundGenerate);
}
