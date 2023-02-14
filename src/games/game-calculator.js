import gameLaunch from '../index.js';
import getRandomNumber from '../helper.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculator = (numberA, operator, numberB) => {
  switch (operator) {
    case '+':
      return numberA + numberB;
    case '-':
      return numberA - numberB;
    case '*':
      return numberA * numberB;
    default:
      return 'Error!';
  }
};

const getQA = () => {
  const numberA = getRandomNumber(30);
  const numberB = getRandomNumber(30);
  const operator = operations[getRandomNumber(operations.length - 1)];
  const question = `${numberA} ${operator} ${numberB}`;
  const correctAnswer = calculator(numberA, operator, numberB);
  return [question, String(correctAnswer)];
};

export default () => {
  gameLaunch(description, getQA);
};
