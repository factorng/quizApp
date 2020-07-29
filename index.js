import {Question} from './components/Question.js';

const data = {
  question: 'Who let the dogs out?',
  answers: ['Ban', 'Danila', 'Misha', 'Vitalic'],
  number: 3,
  total: 6,
};
const question = new Question(data);
question.getQuestionElement();
