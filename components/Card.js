export default class Card {
  constructor(cardSelector, {
      id,
      question,
      answers
    },
    handleButtonClick) {
    this._cardSelector = cardSelector;
    this._cardId = id;
    this._cardQuestion = question;
    this._answers = answers;
    this._handleButtonClick = handleButtonClick;
  }

  //клонируем Node
  _getTemplate() {
    const cardElement = this._cardSelector
      .content
      .querySelector('.card__container')
      .cloneNode(true);
    return cardElement;
  }

  //генерируем карту вопроса
  generateCard() {
    this._element = this._getTemplate();
    this._id = this._element.querySelector('.card__id');
    this._question = this._element.querySelector('.card__question');
    this._answers = Array.from(this._element.querySelectorAll('.card__answer'));
    this._button = this._element.querySelector('.card__button');

    this._id.textContent = this._cardId;
    this._question.textContent = this._cardQuestion;
    this._answers.forEach((item, id) => {
      switch (id) {
        case 0:
          item.textContent = this._answers.answer_a;
          break;
        case 1:
          item.textContent = this._answers.answer_b;
          break;
        case 2:
          item.textContent = this._answers.answer_c;
          break;
        case 3:
          item.textContent = this._answers.answer_d;
          break;
      }
      this._button.addEventListener('click', () => {_handleButtonClick()})

    })
  }
}
