export default class Card {
  constructor(container, handleButtonClick, res) {
    this._handleButtonClick = handleButtonClick;
    this._container = container;
  }

  //общий функционал рендера титульного экрана и экрана результатов
  _render(titleText,descriptionText, buttonText) {
    const title = document.createElement('div');
    const description = document.createElement('div');
    const start = document.createElement('button');
    title.className = 'main__greeting';
    title.innerHTML = titleText;
    description.className = 'main__description';
    description.innerHTML = descriptionText;
    start.className = 'main__button';
    start.innerHTML = buttonText;
    start.addEventListener('click', () => {
      this._handleButtonClick()
    });
    this._container.append(title);
    this._container.append(description);
    this._container.append(start);
  }

  /**
   * метод рендера титульного экрана с приветствием и в будущем с настройками
   */
  renderTitleMenu() {
    this._render('Добро пожаловать в Quiz!', 'Для успешного прохождения теста наберите не меньше 8 очков, за каждый правильнвй ответ даётся 2 очка. Удачи!', 'Поехали!');
  }

  //метод рендера экрана с настройками
  renderSettings() {

  }

  //рендер экрана с результатами , сокращу потом код
  renderResults(resultsArr) {
    let result = 0;
    resultsArr.forEach(answer => {
      if (answer) {
        result++;
      }
    })

    if (result * 2 >= 8) {
      this._render('Поздравляем с успешным прохождением!',`Вы набрали ${result*2} из 10 баллов.`, 'Ещё раз');
    } else if (result * 2 >= 5 && result < 8) {
      this._render('Надо ещё немного постараться.', `Вы набрали ${result*2} из 10 баллов.`, 'Ещё раз');
    } else {
      this._render('К сожалению вы проиграли...', `Вы набрали ${result*2} из 10 баллов.`, 'Ещё раз');
    }

  }

  //метод навешивания слушателя на кнопку далее
  addEventListenerNextButton(buttonNext, handleClick) {
    buttonNext.addEventSelector('click', () => {
      handleClick
    })
  }

}
