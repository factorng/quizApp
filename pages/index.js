import { Api } from '../components/Api.js';

const api = new Api ({
  url: 'https://opentdb.com/api.php?amount=10&category=18'
})

api.getQuestion().then(res => console.log(res));

console.log('test git branch')
