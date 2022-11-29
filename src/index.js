import readlineSync from 'readline-sync';

const roundsCount = 3;

export default function runGame(description, generateRound) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();

    console.log(`Question:${question}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (answerPlayer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `${answerPlayer} is wrong answer ;(. Correct answer was ${answer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
