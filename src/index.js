import readlineSync from 'readline-sync';

export default function sayWelcome() {
  console.log('Welcome to the Brain Games!');
  let name = '';

  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
}

// function rulles () {
//   console.log('');
// }
