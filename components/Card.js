/**
 * Класс для рендера вопросов в разметку
 * @typedef {Object} Card
 */

export default class Card {
  constructor(container, handleButtonClick) {
    this._handleButtonClick = handleButtonClick;
    this._container = container;
  }

  /**
   * метод рендера общей части страниц приветствия и результата
   * @param {String} titleText текст заголовка
   * @param {String} descriptionText текст описания
   * @param {String} buttonText текст кнопки
   */
  _render(titleText, descriptionText, buttonText) {
    const title = document.createElement('div');
    const description = document.createElement('div');
    const timer = document.createElement('div');
    const start = document.createElement('button');
    title.className = 'main__greeting';
    title.innerHTML = titleText;
    description.className = 'main__description';
    description.innerHTML = descriptionText;
    timer.className = 'main__timer';
    start.className = 'main__button';
    start.innerHTML = buttonText;
    start.addEventListener('click', () => {
      this._handleButtonClick()
    });
    this._container.append(title);
    this._container.append(description);
    this._container.append(timer);
    this._container.append(start);
  }

  /**
   * метод рендера титульного экрана с приветствием
   */
  renderTitleMenu() {
    this._container.querySelector('.main__greeting').remove();
    this._render('Добро пожаловать в Quiz!', 'Для успешного прохождения теста наберите не менее 8 очков, за каждый правильный ответ даётся 2 очка. Удачи!', 'Поехали!');
  }

  /**
   * метод рендера экрана с результатами
   * @param {Number} score количество очков
   */
  renderResults(score) {
    if (score >= 8) {
      this._render('Поздравляем с успешным прохождением!', `Вы набрали ${score} из 10 баллов.`, 'Ещё раз');
    } else if (score >= 5 && result < 8) {
      this._render('Надо ещё немного постараться.', `Вы набрали ${score} из 10 баллов.`, 'Ещё раз');
    } else {
      this._render('К сожалению вы проиграли...', `Вы набрали ${score} из 10 баллов.`, 'Ещё раз');
    }
  }

  /**
   *метод навешивания слушателя на кнопку далее
   */
  addEventListenerNextButton(buttonNext, handleClick) {
    buttonNext.addEventSelector('click', () => {
      handleClick
    })
  }

}
