export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

/**
 * метод для получения списка вопросов и ответов через api https://opentdb.com/
 *
 * @param {Number} questionAmount количество вопросов
 * @param {Number} category выбор категории, можно посмотреть методом getCategories()
 * @param {String} difficulty выбор сложности вопросов, всего три вида: easy, medium, hard
 *
 * res.results выведет сразу массив вопросов
 */
  getQuestion(questionAmount, category, difficulty) {
    return fetch(`${this._url}/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse)
  }

/**
 * метод для просмотра категорий, для каждой назначается цифра, выгрузка массивом в консоль
 */
  getCategories() {
    return fetch(`${this._url}/api_category.php`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._handleResponse)
      .then(res => console.log(res.trivia_categories))
  }
}
