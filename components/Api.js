export class Api {
    constructor(options){
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

    getQuestion() {
      return fetch(this._url, {
        method: 'GET',
        headers: this._headers
      })
        .then(this._handleResponse)
    }
}
