import runGame from '../index.js';
import randomInteger from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

function expressionСalculation(
  firstRandomNumber,
  randomOperator,
  twoRandomNumber,
) {
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
  return answer;
}

export default function runGameCalc() {
  const roundGenerate = () => {
    const result = [];

    // Рандом оператора
    const randomOperator = operators[randomInteger(0, 2)];
    // Рандом первого
    const firstRandomNumber = randomInteger(0, 100);
    // Рандом второго число
    const twoRandomNumber = randomInteger(0, 100);

    const question = `${firstRandomNumber} ${randomOperator} ${twoRandomNumber}`;
    result.push(
      question,
      String(
        expressionСalculation(
          firstRandomNumber,
          randomOperator,
          twoRandomNumber,
        ),
      ),
    );
    return result;
  };
  runGame(description, roundGenerate);
}
