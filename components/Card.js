export default class Card {
  constructor(container, handleButtonClick) {
    this._handleButtonClick = handleButtonClick;
    this._container = container;
  }

  /**
   * метод рендера титульного экрана с приветствием и в будущем с настройками
   */
  renderTitleMenu() {
    const title = document.createElement('div');
    const start = document.createElement('button');
    title.className = 'cards__greeting';
    title.innerHTML = 'Добро пожаловать в Quiz!';
    start.className = 'cards__button';
    start.innerHTML = 'Поехали!';
    start.addEventListener('click', () => {
      this._handleButtonClick()
    });
    this._container.append(title);
    this._container.append(start);
  }

  renderSettings() {

  }

  renderResults() {

  }

  addEventListenerNextButton(buttonNext, handleClick) {
    buttonNext.addEventSelector('click', () => {handleClick})
  }

}
