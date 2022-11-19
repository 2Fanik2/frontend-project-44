import runGame from '../index.js';
import generateRandomInRange from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const roundGenerate = () => {
  const result = [];

 
  const randomOperator = operators[generateRandomInRange(0, operators.length - 1)];
  
  const firstRandomNumber = generateRandomInRange(0, 100);
  
  const twoRandomNumber = generateRandomInRange(0, 100);

  const question = `${firstRandomNumber} ${randomOperator} ${twoRandomNumber}`;
  const answer = String(
    Сalculation(
      firstRandomNumber,
      randomOperator,
      twoRandomNumber,
    ));

  result.push(question,answer);

  return result;
};

function Сalculation(
  num1,
  num2,
  operator
) {
  
  switch (operator) {
    case '+':
      return num1 + num2;
      
    case '-':
      return num1 - num2;
      
    case '*':
      return num1 * num2;
      
    default:
  }
  return
}

export default function runGameCalc() {
  
  runGame(description, roundGenerate);
}
