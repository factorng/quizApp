/**
 * Класс для рендера вопросов в разметку
 * @typedef {Object} Question
 * @property {Object} data
 */

export class Question {
  constructor(data) {
    this._question = data.question;
    this._answers = Array.from(data.answers);
    this._rightAnswer = data.rightAnswer;
    this._questionNumber = data.number;
    this._questionTotal = data.total;
    this._userAnswer = false;
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
    if(answer == this._rightAnswer) {
       this._answerElement.querySelector('.card__answer').id = 'right';
    }
    return this._answerElement;
  }
  /**
   * метод для рендера карточки с вопросом в разметку и добавлением слушателя на
   * кнопку с вопросом
   */
  renderCard() {
    document.querySelector('.main').append(this._getQuestionElement());
    this._answers.forEach((answer) => {
      document.querySelector('.card__answers').append(this._getAnswerElement(answer));
    });
    this._addEventListeners();
  }
  /**
   * метод для запроса ответа пользователя правильный или нет
   * @returns {boolean}
   */
  getUserAnswer() {
    return this._userAnswer;
  }
  /**
   * метод для установки слушателей на кнопки с ответами и доб цвета в зависимости
   * от ответа пользователя
   */
  _addEventListeners() {
    document.addEventListener('click', this._questionClickHandler = (evt) => {
      if (evt.target.classList.contains('card__answer')) {
        if (evt.target.innerText == this._rightAnswer) {
          evt.target.classList.add('card__answer_green');
          this._userAnswer = true;
          document.removeEventListener('click', this._questionClickHandler);
        } else {
          evt.target.classList.add('card__answer_red');
          document.querySelector('#right').classList.add('card__answer_green');
          //это мне самому не оч нравится, завтра подумаю как переделать
          document.removeEventListener('click', this._questionClickHandler);
        }
      }
    });
  }
}
