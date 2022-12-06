import { question } from 'readline-sync';
import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (num) => {
  return num % 2 === 0;
}

const generateRound = () => {
    
  const num = getRandomInRange(0,100);
  const question = num; 
  const answer = isEven(num) ? 'yes': 'no';
  return [question, answer];
};

export default function runGameEven() {
  
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, generateRound);
}
