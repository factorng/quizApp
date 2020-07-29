/**
 * Класс для рендера вопросов в разметку
 * @typedef {Object} Question
 * @property {Object} data
 */

export class Question {
  constructor(data) {
    this._question = data.question;
    this._answers = Array.from(data.answers);
    this._questionNumber = data.number;
    this._questionTotal = data.total;
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
  getQuestionElement() {
    this._questionElement = this._getQuestionTemplate();
    document.querySelector('.cards').append(this._questionElement);
    this._questionElement.querySelector('.card__question').innerText = this._question;
    this._questionElement.querySelector('.card__question-title')
      .innerText = `Вопрос ${this._questionNumber} из ${this._questionTotal}`;

    this._answers.forEach(answer => {
      this._answerElement = this._getAnswerTemplate();
      this._answerElement.querySelector('.card__answer').innerText = answer;
      document.querySelector('.card__answers').append(this._answerElement);

    });
  }
}
