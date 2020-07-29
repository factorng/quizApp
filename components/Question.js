export class Question {
    // constructor(data) {
    //     this._question = data.question;
    //     this._answers = data.answers;
    // }
    _getQuestionTemplate() {
        return document
        .querySelector('#question')
        .content
        .querySelector('.card')
        .cloneNode(true);
    }
    
    getQuestionElement() {
        this._questionElement = this._getQuestionTemplate();
        document.querySelector('.cards').append(this._questionElement);
        this._questionElement.querySelector('.card__question').innerText = 'fuck';
    }
}