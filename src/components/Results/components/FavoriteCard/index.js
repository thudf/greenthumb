import favoriteCard from './index.html';
import Icon from '../../../Icon';

import LowSun from '../../../../assets/images/icons/low-sun.svg'
import HighSun from '../../../../assets/images/icons/high-sun.svg'
import NoSun from '../../../../assets/images/icons/no-sun.svg'
import Pet from '../../../../assets/images/icons/pet.svg'
import Toxic from '../../../../assets/images/icons/toxic.svg'
import RarelyWater from '../../../../assets/images/icons/1-drop.svg'
import DailyWater from '../../../../assets/images/icons/two-drops.svg'
import RegularlyWater from '../../../../assets/images/icons/3-drops.svg'


import './index.less';

class FavoriteCard {
  constructor(data, wrapper, id, index, tag) {
    this.img = data.url;
    this.title = data.name;
    this.price = data.price;
    this.sun = data.sun;
    this.water = data.water;
    this.toxicity = data.toxicity;
    this.wrapper = wrapper;
    this.id = id;
    this.index = index;
    this.tag = tag;
  }

  render() {
    const sunIcon = {
      low: LowSun,
      high: HighSun,
      no: NoSun,
    };

    const petIcon = {
      true: Toxic,
      false: Pet,
    };

    const waterIcon = {
      rarely: RarelyWater,
      daily: DailyWater,
      regularly: RegularlyWater,
    };

    const favoriteWraper = document.getElementById(this.wrapper);
    favoriteWraper.innerHTML += favoriteCard;

    const article = favoriteWraper.getElementsByTagName('article');
    article[this.index].setAttribute('id', this.id);
    
    if (!this.tag) {
      const staffLabel = article[this.index].getElementsByTagName('div');
      staffLabel[0].style.opacity = 0;
      staffLabel[0].style.backgroundColor = 'transparent';
    }

    const title = article[this.index].getElementsByTagName('h1');
    title[0].innerText = this.title;

    const price = article[this.index].getElementsByTagName('h3');
    price[0].innerText = `$${this.price}`;

    const img = article[this.index].getElementsByTagName('img');
    img[0].src = this.img;
    img[0].alt = this.title;

    const listIcons = article[this.index].getElementsByTagName('ul');
    listIcons[0].setAttribute('id', `${this.id}-list-icons`);

    const pet = new Icon(petIcon[this.toxicity], '', 35, 25, `${this.id}-list-icons`, 'pet-icon');
    pet.render();

    const sun = new Icon(sunIcon[this.sun], '', 30, 30, `${this.id}-list-icons`, 'sun-icon');
    sun.render();

    const water = new Icon(waterIcon[this.water], '', 25, 25, `${this.id}-list-icons`, 'water-icon');
    water.render();
  }
}

export default FavoriteCard;