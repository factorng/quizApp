import { Api } from '../components/Api.js';

const api = new Api({
  url: 'https://opentdb.com'
})

api.getQuestion(10, 18, 'hard').then(res => console.log(res));

api.getCategories();

console.log('test')
