import readlineSync from 'readline-sync';

export default function gameEven() {
  console.log('Welcome to the Brain Games!');
  let name = '';
  const helloPlayer = () => {
    name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}`);
  };
  helloPlayer();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const rundomNumber = Math.floor(Math.random() * 100) + 1;

    console.log('Question: ', rundomNumber);

    const answerPlayer = readlineSync.question('Your answer: ');
    let answer = '';
    // Проверка на четность данного числа
    if (rundomNumber % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    i += 1;
    // Проверка ответов
    if (answer === answerPlayer) {
      console.log('Correct!');
    } else {
      console.log(`${answerPlayer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`\'Let\'s try again, ${name}`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
