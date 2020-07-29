import {
  Question
} from './components/Question.js';
import {
  Api
} from './components/Api.js';
import Card from './components/Card.js';
import {
  cardsSelector,
  buttonNextSelector
} from './components/utils/constants.js';

const cardsContainer = document.querySelector(cardsSelector);
const buttonNext = document.querySelector(buttonNextSelector);
let countQuestions = 0;

const api = new Api({
  url: 'https://opentdb.com'
});

const card = new Card(
  cardsContainer,
  () => {
    api.getQuestion(10, 18, 'hard')
      .then(res => {
        countQuestions = 0;
        document.querySelector('.cards__greeting').classList.add('cards__greeting_hidden');
        document.querySelector('.cards__button').classList.add('cards__button_hidden');
        console.log(res.results[0]);
        const question = new Question(data);
        question.renderCard();
      });
  },
  buttonNext);



const data = {
  question: 'Who let the dogs out?',
  answers: ['Ban', 'Danila', 'Misha', 'Vitalic'],
  rightAnswer: 'Danila',
  number: 3,
  total: 6,
};

//api.getQuestion(10, 18, 'hard').then(res=>console.log(res));
//api.getCategories();
card.renderTitleMenu()
