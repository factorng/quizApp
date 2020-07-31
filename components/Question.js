import {randomInteger} from './utils/utils.js';


/**
 * Класс для рендера вопросов в разметку
 * @typedef {Object} Question
 * @property {Object} data
 */

export class Question {
  constructor(data, questionNumber, questionTotal = 5, questionsAnswers = [true]) {
    this._question = data.question;
    this._answers = Array.from(data.incorrect_answers);
    this._rightAnswer = data.correct_answer;
    this._questionNumber = questionNumber;
    this._questionTotal = questionTotal;
    this._userAnswer = false;
    this._questionsAnswers = questionsAnswers;
  }
  _getQuestionTemplate() {
    return document
      .querySelector('#question')
      .content
      .querySelector('.card')
      .cloneNode(true);
  }
  _getAnswerTemplate() {
    return document
      .querySelector('#answer')
      .content
      .cloneNode(true);
  }
  _getIconTrueElement() {
    return document
      .querySelector('#answer-icon-true')
      .content
      .querySelector('.answer-icon-true')
      .cloneNode(true);
  }
  getIconFalseElement() {
    return document
      .querySelector('#answer-icon-false')
      .content
      .querySelector('.answer-icon-false')
      .cloneNode(true);
  }
  /**
   * метод для добавления значений в вопрос
   */
  _getQuestionElement() {
    this._questionElement = this._getQuestionTemplate();
    this._questionElement.querySelector('.card__question').innerText = this._question;
    this._questionElement.querySelector('.card__question-title')
      .innerText = `Вопрос ${this._questionNumber} из ${this._questionTotal}`;
    return this._questionElement;
  }
  /**
   * метод для добавления значения в ответ
   * @param {string} answer
   */
  _getAnswerElement(answer) {
    this._answerElement = this._getAnswerTemplate();
    this._answerElement.querySelector('.card__answer').innerText = answer;
    return this._answerElement;
  }
  /**
   * метод для рендера карточки с вопросом в разметку и добавлением слушателя на
   * кнопку с вопросом
   */
  renderCard() {
    document.querySelector('.main').append(this._getQuestionElement());
    let allAnswersElements = [];
    this._answers.forEach((answer) => {
      allAnswersElements.push(this._getAnswerElement(answer));
    });
    const rightAnswerElement = this._getAnswerElement(this._rightAnswer);
    rightAnswerElement.querySelector('.card__answer').setAttribute('data-answer', 'right');
    allAnswersElements.splice(randomInteger(0, 3), 0, rightAnswerElement);
    allAnswersElements.forEach((element) => {
      document.querySelector('.card__answers').append(element);
    });
    this.renderIconElements();
    this._addEventListeners();
  }
  renderIconElements() {
    this._questionsAnswers.forEach((question) => {
      if(question) {
        document.querySelector('.card__answer-icons').append(this._getIconTrueElement());
      } else {
        document.querySelector('.card__answer-icons').append(this.getIconFalseElement());
      }
    });
  }
  /**
   * метод для запроса ответа пользователя правильный или нет
   * @returns {boolean}
   */
  getUserAnswer() {
    return this._userAnswer;
  }
  /**
   * метод для получения массива boolean с историей ответов пользователя
   * @returns {Array}
   */
  getAnswersData() {
    return this._questionsAnswers
  }
  makeQuestionsInactive() {
    Array.from(document.querySelectorAll('.card__answer')).forEach((answer) => {
      answer.classList.add('card__answer_inactive');
    });
  }
  /**
   * метод для установки слушателей на кнопки с ответами и доб цвета в зависимости
   * от ответа пользователя
   */
  _addEventListeners() {
    document.addEventListener('click', this.questionClickHandler = (evt) => {
      if (evt.target.classList.contains('card__answer')) {
        const nextButton = document.querySelector('.card__button-next');
        nextButton.classList.remove('card__button-next_disabled');
        nextButton.removeAttribute('disabled');
        if (evt.target.innerText == this._rightAnswer) {
          this.makeQuestionsInactive();
          evt.target.classList.add('card__answer_green');
          this._userAnswer = true;
          this._questionsAnswers.push(true);
          document.querySelector('.card__answer-icons').append(this._getIconTrueElement());
          document.removeEventListener('click', this.questionClickHandler);
        } else {
          this.makeQuestionsInactive();
          evt.target.classList.add('card__answer_red');
          document.querySelector(`.card__answer[data-answer='right']`)
            .classList.add('card__answer_green');
          this._questionsAnswers.push(false);
          document.querySelector('.card__answer-icons').append(this.getIconFalseElement());
          document.removeEventListener('click', this.questionClickHandler);
        }
      }
    });
  }
}
