export default class Card {
  constructor(container, handleButtonClick) {
    this._handleButtonClick = handleButtonClick;
    this._container = container;
  }

  //общий функционал рендера титульного экрана и экрана результатов
  _render(titleText, buttonText) {
    const title = document.createElement('div');
    const start = document.createElement('button');
    title.className = 'cards__greeting';
    title.innerHTML = titleText;
    start.className = 'cards__button';
    start.innerHTML = buttonText;
    start.addEventListener('click', () => {
      this._handleButtonClick()
    });
    this._container.append(title);
    this._container.append(start);
  }

  /**
   * метод рендера титульного экрана с приветствием и в будущем с настройками
   */
  renderTitleMenu() {
    this._render('Добро пожаловать в Quiz!', 'Поехали!');
  }

  //метод рендера экрана с настройками
  renderSettings() {

  }

  //рендер экрана с результатами , сокращу потом код
  renderResults(result) {

    if (result >= 8) {
      this._render('Поздравляем с успешным прохождением!', 'Ещё раз');
    } else if (result >= 5 && result < 8) {
      this._render('Надо постараться чуть лучше.', 'Ещё раз');
    } else {
      this._render('К сожалению вы проиграли...', 'Ещё раз');
    }

  }

//метод навешивания слушателя на кнопку далее
addEventListenerNextButton(buttonNext, handleClick) {
  buttonNext.addEventSelector('click', () => {
    handleClick
  })
}

}
