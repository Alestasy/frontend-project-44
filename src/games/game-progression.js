import gameLaunch from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(firstNumber + (step * i));
  }
  return arr;
};

const length = 10;

const getQA = () => {
  const firstNumber = getRandomNumber(70);
  const step = getRandomNumber(10);
  const progression = getProgression(firstNumber, step, length);
  const randomIndex = getRandomNumber(progression.length);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => {
  gameLaunch(description, getQA);
};
