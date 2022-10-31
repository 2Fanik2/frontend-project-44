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
    for (let i = 1; i <= firstRundomNumber; i += 1) {
      if (firstRundomNumber % i === 0) {
        firstDivisors.push(i);
      }
    }
    // Находим все делители второго числа
    for (let i = 1; i <= twoRundomNumber; i += 1) {
      if (twoRundomNumber % i === 0) {
        twoDivisors.push(i);
      }
    }
    // Находим общие делители
    const divisors = _.intersection(firstDivisors, twoDivisors);
    // Находим наибольший делитель

    for (let i = 0; i < divisors.length; i += 1) {
      if (answer < divisors[i]) {
        answer = divisors[i];
      }
    }
    // Проверка ответов
    if (answer == answerPlayer) {
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
