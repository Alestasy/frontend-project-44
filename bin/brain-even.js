#!/usr/bin/env node

import readlineSync from 'readline-sync';

// приветствие
const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // 3 раунда
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    // проверка четности
    const trueAnswerEven = randomNumber % 2 === 0 && userAnswer === 'yes';
    const trueAnswerOdd = randomNumber % 2 !== 0 && userAnswer === 'no';

    // правила раундов
    if (trueAnswerEven === true || trueAnswerOdd === true) {
      console.log('Correct!');
    } else {
      if (userAnswer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      if (userAnswer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      if (userAnswer !== 'no' && userAnswer !== 'yes') {
        console.log(`${userAnswer} is wrong answer ;(`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

// eslint-disable-next-line eol-last
gameEven();