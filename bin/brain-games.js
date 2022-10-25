#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let name = '';
const helloPlayer = () => {
  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
};
helloPlayer();
