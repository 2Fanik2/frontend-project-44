import runGame from '../index.js';

export default function runGameProgress() {
  const roundGenerate = () => {
    const result = [];
    const intervalOfProgression = Math.floor(Math.random() * 10) + 1;
    const progressive = [intervalOfProgression];
    let itemOfProgression = intervalOfProgression;
    for (let i = 1; i < 10; i += 1) {
      itemOfProgression += intervalOfProgression;
      progressive.push(itemOfProgression);
    }
    // Скрываем рандомное число
    const randomNumberSecret = Math.floor(Math.random() * 10);
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
