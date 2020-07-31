import {
  Question
} from '../components/Question.js';
import {
  Api
} from '../components/Api.js';
import Card from '../components/Card.js';
import {
  ScoreCalculator
} from '../components/ScoreCalculator.js';
import {
  cardsSelector,
  buttonNextSelector,
  cardTimerSelector
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
        document.querySelector('.main__timer').remove();
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

    const timerFunction = (question) => {
      let answersArr = question.getAnswersData()
      if (countQuestions === 5) {
        countQuestions++;
        document.querySelector('.card').remove();
        card.renderResults(answersArr);
      } else {
        answersArr.push(false);
        document.querySelector('.card__answer-icons').append(question.getIconFalseElement());
        question.makeQuestionsInactive();
        document.removeEventListener('click', question.questionClickHandler);
        const buttonNext = document.querySelector(buttonNextSelector);
        buttonNext.removeAttribute('disabled');
        buttonNext.classList.remove('card__button-next_disabled');
      }
    }

    card.renderTitleMenu();


    function newQuestion(obj, questionNumber, answersArr) {
      const question = new Question(obj, questionNumber, 5, answersArr);
      question.renderCard();
      const buttonNext = document.querySelector(buttonNextSelector);
      const scoreCalculator = new ScoreCalculator(
        buttonNext,
        question,
        (n) => {
          timerFunction(question);
        });
        const total = 0;
        if (countQuestions === 1) {
        scoreCalculator.setTotalTimer('.main__timer')
        }
      const cardTimer = document.querySelector(cardTimerSelector);
      scoreCalculator.setAnswerTimer(cardTimer);
      buttonNext.setAttribute('disabled', 'disabled');
      buttonNext.classList.add('card__button-next_disabled');
      buttonNext.addEventListener('click', () => {
        handleNextClick(question);
      });
    }
  })
