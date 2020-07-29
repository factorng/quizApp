import {Question} from './components/Question.js';
import {Api} from './components/Api.js';

const data = {
  question: 'Who let the dogs out?',
  answers: ['Ban', 'Danila', 'Misha', 'Vitalic'],
  rightAnswer: 'Danila',
  number: 3,
  total: 6,
};
const question = new Question(data);
question.renderCard();


const api = new Api({
  url: 'https://opentdb.com'
});
api.getQuestion(10, 18, 'hard').then(res=>console.log(res));
//api.getCategories();

