import gameLaunch from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Определение простого числа (1 не простое число!)
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getQA = () => {
  const num = getRandomNumber(100);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLaunch(description, getQA);
};
