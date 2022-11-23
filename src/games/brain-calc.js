import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+': return num1 + num2;
    case '*': return num1 * num2;
    case '-': return num1 - num2;
    default: throw new Error(`Operator ${operator} - is unknown `);
  }
}

const generateRound = () => {
  const operator = operators[getRandomInRange(0, operators.length - 1)];

  const num1 = getRandomInRange(0, 100);

  const num2 = getRandomInRange(0, 100);

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(
    calculate(
      num1,
      operator,
      num2,
    ),
  );

  return [question, answer];
};

export default function runGameCalc() {
  runGame(description, generateRound);
}
