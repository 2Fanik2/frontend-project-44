import runGame from '../index.js';

export default function runGameCalc() {
  const roundGenerate = () => {
    const result = [];
    // Функция рандома от 0 до 2
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    // Массив операторов
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomInt(3)];
    // Рандом первого
    const firstRandomNumber = Math.floor(Math.random() * 100) + 1;
    // Рандом второго число
    const twoRandomNumber = Math.floor(Math.random() * 100) + 1;

    const question = `${firstRandomNumber} ${randomOperator} ${twoRandomNumber}`;
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
    result.push(question, String(answer));
    return result;
  };

  const description = 'What is the result of the expression?';
  runGame(description, roundGenerate);
}
