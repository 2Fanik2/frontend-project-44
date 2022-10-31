import readlineSync from 'readline-sync';

export default function runGameProgress() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log('What number is missing in the progression?');

  for (let count = 0; count < 3; count += 1) {
    // Создаём прогрессию
    const intervalOfProgression = Math.floor(Math.random() * 10) + 1;
    const progressive = [intervalOfProgression];
    let itemOfProgression = intervalOfProgression;
    for (let i = 1; i < 10; i += 1) {
      itemOfProgression += intervalOfProgression;
      progressive.push(itemOfProgression);
    }
    // Скрываем рандомное число
    const randomNumberSecret = Math.floor(Math.random() * 10);
    const answer = progressive[randomNumberSecret];
    progressive[randomNumberSecret] = '..';
    // Выводим вопрос
    let question = 'Question:';
    for (let number = 0; number < progressive.length; number += 1) {
      question = `${question} ${progressive[number]}`;
    }
    console.log(question);
    // Запрашиваем ответ
    const answerPlayer = readlineSync.question('Your answer: ');

    if (Number(answer) === Number(answerPlayer)) {
      console.log('Correct!');
    } else {
      console.log(
        `${answerPlayer} is wrong answer ;(. Correct answer was ${answer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (count === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
