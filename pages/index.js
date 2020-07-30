import {
  Question
} from '../components/Question.js';
import {
  Api
} from '../components/Api.js';
import Card from '../components/Card.js';
import {
  cardsSelector,
  buttonNextSelector
} from '../components/utils/constants.js';

const cardsContainer = document.querySelector(cardsSelector);
let countQuestions = 0;

const api = new Api({
  url: 'https://opentdb.com'
});

api.getQuestion(10, 18, 'hard')
  .then(res => {

    const card = new Card(
      cardsContainer,
      () => {
        countQuestions = 1;
        document.querySelector('.main__greeting').remove();
        document.querySelector('.main__description').remove();
        document.querySelector('.main__button').remove();
        newQuestion(res.results[0], countQuestions, []);
      });

    const handleNextClick = (question) => {
      let answersArr = question.getAnswersData()
      if (countQuestions === 5) {
        document.querySelector('.card').remove();
        card.renderResults(answersArr);
      } else {
        countQuestions += 1;
        document.querySelector('.card').remove();
        newQuestion(res.results[countQuestions], countQuestions, answersArr);
      }
    }

    card.renderTitleMenu()

    function newQuestion(obj, questionNumber, answersArr) {
      const question = new Question(obj, questionNumber, 5, answersArr);
      question.renderCard();
      const buttonNext = document.querySelector(buttonNextSelector);
      buttonNext.addEventListener('click', () => {
        handleNextClick(question);
      });
    }
  })
