import {cardTemplateSelector,startButtonSelector} from '../scripts/utils/constants.js'
import Card from '../scripts/components/Card.js';

const cardTemplate = document.querySelector(cardTemplateSelector);

const card = new Card(cardTemplate, apiObject);
