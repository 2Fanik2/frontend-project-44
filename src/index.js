import readlineSync from 'readline-sync';
import roundGenerate from '';

const rounds = 3;
export default function runGame (description, roundGenerate) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(description);
  let i = 0;
  while(i < rounds) {
    const questAndAnswer = roundGenerate();
    console.log(`Question: ${questAndAnswer[0]}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (questAndAnswer[1] === answerPlayer) {
      console.log('Correct!');
    } else {
      console.log(
        `${answerPlayer} is wrong answer ;(. Correct answer was ${answer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};


