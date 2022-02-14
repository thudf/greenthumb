import QuestionCard from './components/QuestionCard';
import { getPlants } from '../../utlis/requests';

import Sun from '../../assets/images/illustrations/sun.png';
import WateringCan from '../../assets/images/illustrations/wateringcan.png';
import Dog from '../../assets/images/illustrations/dog.png';

import './index.less';

const commandsValues = {
  sun: null,
  water: null,
  pet: null,
};

const handleSelectChange = e => {
  const { id, value } = e.target;

  commandsValues[id] = value;

  const values = [...Object.keys(commandsValues).map(key => commandsValues[key])];
  if (values.every(value => !!value)) {
    getPlants({...commandsValues});
  }
};

const questionsList = [
  {
    img: Sun,
    alt: 'sun-illustration',
    width: 75,
    height: 75,
    text: '<p><strong>1.</strong> Set the amount of <strong>sunlight</strong> your plant will get.</p>',
    options: ['no', 'low', 'high'],
    selectId: 'sun',
    onSelect: e => handleSelectChange(e),
  },
  {
    img: WateringCan,
    alt: 'watercan-illustration',
    width: 103,
    height: 75,
    text: '<p><strong>2.</strong> How often do you want to <strong>water</strong> your plant?</p>',
    options: ['regularly', 'daily', 'rarely'],
    selectId: 'water',
    onSelect: e => handleSelectChange(e),
  },
  {
    img: Dog,
    alt: 'dog-illustration',
    width: 75,
    height: 62,
    text: '<p><strong>3.</strong> Do you have pets? Do they <strong>chew</strong> plants?</p>',
    options: ['true', 'false'],
    selectId: 'pet',
    onSelect: e => handleSelectChange(e),
  },
];

questionsList.forEach(question => {
  const cardTeste = new QuestionCard(question, 'article-commands');
  cardTeste.render();
});

