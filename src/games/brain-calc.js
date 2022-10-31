import readlineSync from 'readline-sync';

export default function runGameCalc() {
  console.log('Welcome to the Brain Games!');
  let name = '';
  const helloPlayer = () => {
    name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}`);
  };
  helloPlayer();
  // Заголовок начала игры
  console.log('What is the result of the expression?');
  // Функция рандома от 0 до 2
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  // Массив операторов
  const operators = ['+', '-', '*'];

  let i = 0;
  while (i < 3) {
    // Рандомим оператор и записываем в константу
    const randomOperator = operators[getRandomInt(3)];
    // Рандом первого числа
    const firstRandomNumber = Math.floor(Math.random() * 100) + 1;
    // Рандом второго число
    const twoRandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(
      `Question: ${firstRandomNumber} ${randomOperator} ${twoRandomNumber}`,
    );
    // Находим правильный ответ
    let answer = 0;
    switch (randomOperator) {
      case '+':
        answer = firstRandomNumber + twoRandomNumber;
        break;
      case '-':
        answer = firstRandomNumber - twoRandomNumber;
        break;
      case '*':
        answer = firstRandomNumber * twoRandomNumber;
        break;
      default:
    }
    // Спрашиваем ответ игрока
    const answerPlayer = readlineSync.question('Your answer: ');
    // Сравниваем ответы
    if (Number(answer) === Number(answerPlayer)) {
      console.log('Correct!');
    } else {
      console.log(
        `${answerPlayer} is wrong answer ;(. Correct answer was ${answer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
