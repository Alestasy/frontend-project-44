import gameLaunch from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на четность
const isEven = (number) => number % 2 === 0;

const getQA = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  gameLaunch(description, getQA);
};
