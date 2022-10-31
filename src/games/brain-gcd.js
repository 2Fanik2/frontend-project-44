import readlineSync from 'readline-sync';
import _ from 'lodash';

export default function runGameGCD() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const firstRundomNumber = Math.floor(Math.random() * 100) + 1;
    const twoRundomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${firstRundomNumber} ${twoRundomNumber}`);
    // Спрашиваем ответ
    const answerPlayer = readlineSync.question('Your answer: ');
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
    // Проверка ответов
    if (Number(answer) === Number(answerPlayer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answerPlayer} is wrong answer ;(. Correct answer was ${answer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
