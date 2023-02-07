import gameLaunch from '../index.js';

const description = 'What number is missing in the progression?';

// Создаем массив с прогрессией
const getProgression = (firstNumber, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(firstNumber + (step * i));
  }
  return arr;
};

const getQA = () => {
  // Первое число в прогресии
  const firstNumber = Math.floor(Math.random() * 70);
  // Шаг прогрессии
  const step = Math.floor(Math.random() * 10);
  // Длина массива
  const length = 10;
  const progression = getProgression(firstNumber, step, length);
  // Выбираем случайное число из массива
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = `${progression[randomIndex]}`;
  // "Прячем" случайное число в массиве
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => {
  gameLaunch(description, getQA);
};
