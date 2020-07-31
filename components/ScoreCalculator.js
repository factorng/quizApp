export class ScoreCalculator {
  constructor({ handleNextCard }) {
    // this._answerTimer = document.querySelector(answerTimer); // селектор таймера ответа 30 секунд
    // this._totalTimer = document.querySelector(totalTimer); // селектор общего таймера
    this._handleNextCard = handleNextCard; // функция при окончании таймера ответа
  }

  /**
   * метод подсчета правильных очков ответов
   *
   * @param {Array} data массив с данными ответов
   */
  calculateAnswerScore(data) {
    this._totalScore = 0;

    data.forEach(answer => {
      if (answer) {
        this._totalScore += 2;
      }
    })
    return this._totalScore;
  }

  /**
   * метод перевода секунд в формат 00:00:00 (hours:minutes:seconds)
   *
   * @param {Number} sec количество секунд
   */
  _convertToTime(sec) {
    let timeFormat = [
      sec / 3600 % 24 | 0,  // h
      sec / 60 % 60 | 0,    // m
      sec % 60              // s
    ]
    .map(i =>  i < 10 ? '0' + i : i)
    .join(':');

    return timeFormat;
  }

  /**
   * метод установки таймера ответа с обратным отсчетом, выставлен на 30 секунд
   */
  setAnswerTimer() {
    this._time = 31;
    const timer = setInterval(setSeconds.bind(this), 1000);

    function setSeconds() {
      this._time--;
      this._answerTimer.textContent = this._time < 10 ? '0' + this._time : this._time;

      if (this._time === 0) {
        clearInterval(timer);
        this._handleNextCard();
      }
    }
  }

  /**
   * метод установки общего таймера, останавливается после прохождения всех вопросов
   * и записывает результат в ДОМ-элемент общего таймера
   *
   * @param {Number} countQuestions количество пройденных вопросов
   */
  setTotalTimer(countQuestions, element) {
    this._total = 0;

    const timer = setInterval(() => {
      this._total++;
      console.log(this._total);
      console.log(`countQInCalc: ${countQuestions}`);

      if (countQuestions === 5) {
        clearInterval(timer);
        element.textContent = this._convertToTime(this._total);
      }
    }, 1000)
  }
}
