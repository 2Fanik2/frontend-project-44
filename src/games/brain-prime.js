import readlineSync from 'readline-sync';

export default function runGamePrime() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  // Вопрос
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const rundomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${rundomNumber}`);
    // Спрашиваем ответ
    const answerPlayer = readlineSync.question('Your answer: ');
    // Проверяем число на правильность
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
    // Проверка ответов
    if (answer == answerPlayer) {
      console.log('Correct!');
    } else {
      console.log(
        `${answerPlayer} is wrong answer ;(. Correct answer was ${answer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
