import gameLaunch from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQA = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLaunch(description, getQA);
};
