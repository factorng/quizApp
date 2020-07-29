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
    this._Question = this._element.querySelector('.card__question');
    this._Answers = Array.from(this._element.querySelectorAll('.card__answer'));

    this._id.textContent = this._cardId;
    this._Question.textContent = this._cardQuestion;
    this._Answers.forEach((item, id) => {
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
    })



    this._img.src = this._link;
    this._img.alt = this._name;
    this._cardName.textContent = this._name;
    this._cardCounter.textContent = this._likes.length;
    this._setEventListeners();
    if (this._likes.some(likeObj => {
        return likeObj._id === this._id
      })) {
      this._cardLike.classList.add('card__like_pressed');
    } else {
      this._cardLike.classList.remove('card__like_pressed');
    }
    if (ownerId !== myId) {
      this._element.querySelector('.card__del').remove();
    }
    return this._element;
  }

}
