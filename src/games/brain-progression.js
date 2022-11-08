import runGame from '../index.js';
import randomInteger from '../utils.js';

export default function runGameProgress() {
  const roundGenerate = () => {
    const result = [];
    const intervalOfProgression = randomInteger(1, 10);
    const progressive = [intervalOfProgression];
    let itemOfProgression = intervalOfProgression;
    for (let i = 1; i < 10; i += 1) {
      itemOfProgression += intervalOfProgression;
      progressive.push(itemOfProgression);
    }
    // Скрываем рандомное число
    const randomNumberSecret = randomInteger(0, 9);
    const answer = String(progressive[randomNumberSecret]);
    progressive[randomNumberSecret] = '..';

    let question = 'Question:';
    for (let number = 0; number < progressive.length; number += 1) {
      question = `${question} ${progressive[number]}`;
    }
    result.push(question, answer);

    return result;
  };

  const description = 'What number is missing in the progression?';
  runGame(description, roundGenerate);
}
