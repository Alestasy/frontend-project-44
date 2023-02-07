import gameLaunch from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

// Механика наибольшего общего делителя
const gcd = (numberA, numberB) => {
  if (numberB === 0) {
    return numberA;
  }
  return gcd(numberB, numberA % numberB);
};

const getQA = () => {
  const numberA = Math.floor(Math.random() * 100);
  const numberB = Math.floor(Math.random() * 100);
  const question = `${numberA} ${numberB}`;
  const correctAnswer = gcd(numberA, numberB);
  return [question, String(correctAnswer)];
};

export default () => {
  gameLaunch(description, getQA);
};
