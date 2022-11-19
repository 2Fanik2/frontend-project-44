import runGame from '../index.js';
import generateRandomInRange from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

function calculate(num1, operator, num2) {
  let answer1 = 0;
  switch (operator) {
    case '+':
      answer1 = num1 + num2;
      break;

    case '-':
      answer1 = num1 - num2;
      break;

    case '*':
      answer1 = num1 * num2;
      break;
    default:
  }
  return answer1;
}

const roundGenerate = () => {
  const operator = operators[generateRandomInRange(0, operators.length - 1)];

  const num1 = generateRandomInRange(0, 100);

  const num2 = generateRandomInRange(0, 100);

  const question = `${num1} ${operator} ${num2}`;
  const answer2 = String(
    calculate(
      num1,
      operator,
      num2,
    ),
  );

  return [question, answer2];
};

export default function runGameCalc() {
  runGame(description, roundGenerate);
}
