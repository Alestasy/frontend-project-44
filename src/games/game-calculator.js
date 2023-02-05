import gameLaunch from '../index.js';

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
  const numberA = Math.floor(Math.random() * 30);
  const numberB = Math.floor(Math.random() * 30);
  const operator = operations[Math.floor(Math.random() * operations.length)];
  const question = `${numberA} ${operator} ${numberB}`;
  const correctAnswer = calculator(numberA, operator, numberB);
  return [question, String(correctAnswer)];
};

export default () => {
  gameLaunch(description, getQA);
};
