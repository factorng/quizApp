import {cardTemplateSelector,startButtonSelector} from '../scripts/utils/constants.js'
import Card from '../scripts/components/Card.js';

const cardTemplate = document.querySelector(cardTemplateSelector);

const card = new Card(cardTemplate, apiObject);


import { Api } from '../components/Api.js';

const api = new Api({
  url: 'https://opentdb.com'
})

api.getQuestion(10, 18, 'hard').then(res => console.log(res));

api.getCategories();
