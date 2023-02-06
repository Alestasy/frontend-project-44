import gameLaunch from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(firstNumber + (step * i));
  }
  return arr;
};

const getQA = () => {
  const firstNumber = Math.floor(Math.random() * 70);
  const step = Math.floor(Math.random() * 10);
  const length = 10;
  const progression = getProgression(firstNumber, step, length);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  gameLaunch(description, getQA);
};
