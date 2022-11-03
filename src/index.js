import readlineSync from 'readline-sync';

const rounds = 3;
export default function runGame(description, roundGenerate) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(description);
  let i = 0;
  while (i < rounds) {
    const questAndAnswer = roundGenerate();

    console.log(`${questAndAnswer[0]}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (answerPlayer === questAndAnswer[1]) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `${answerPlayer} is wrong answer ;(. Correct answer was ${questAndAnswer[1]}.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
