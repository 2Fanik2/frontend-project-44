import readlineSync from 'readline-sync';

const namePlayer = () => {
  const name = readlineSync.question('May I have your name?: ');
};
