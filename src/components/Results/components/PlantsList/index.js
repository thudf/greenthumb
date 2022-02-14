import Pick from '../../../../assets/images/illustrations/pick.png';
import ArrowUp from '../../../../assets/images/icons/arrow-up.svg';
import FavoriteCard from '../FavoriteCard';
import NormalCard from '../NormalCard';

import './index.less';

class PlantsList {
  constructor(list, parentId, imgSize, isMobile) {
    this.list = [...list];
    this.parentId = parentId;
    this.imgSize = imgSize;
    this.isMobile = isMobile;
  }

  render() {
    const parentElement = document.getElementById(this.parentId);

    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'list-wrapper');

    parentElement.appendChild(wrapper);

    const listHeader = document.createElement('div');

    wrapper.appendChild(listHeader);

    const image = new Image();
    image.src = Pick;
    image.alt = 'Pick';
    image.width = this.imgSize.width;
    image.height = this.imgSize.height;

    const title = document.createElement('h1');
    title.innerText = 'Our picks for you';

    listHeader.appendChild(image);
    listHeader.appendChild(title);

    const grid = document.createElement('div');
    grid.classList.add('grid');

    wrapper.appendChild(grid);

    const mainCard = document.createElement('div');
    mainCard.setAttribute('id', 'main-card');

    const asideCards = document.createElement('div');
    asideCards.setAttribute('id', 'aside-cards');

    const bottomCards = document.createElement('div');
    bottomCards.setAttribute('id', 'bottom-cards');

    grid.appendChild(mainCard);
    grid.appendChild(asideCards);
    grid.appendChild(bottomCards);

    const favoriteIndex = this.list.findIndex(item => !!item.staff_favorite);
    let normalPlants = [];

    if (favoriteIndex >= 0) {
      const favoriteCard = new FavoriteCard(this.list[favoriteIndex], 'main-card', 'favorite-card', 0, true);
      favoriteCard.render();
      normalPlants = [...this.list.filter(item => !item.staff_favorite)];
    }

    if (favoriteIndex < 0) {
      const favoriteCard = new FavoriteCard(this.list[0], 'main-card', 'favorite-card', 0, false);
      favoriteCard.render();
      normalPlants = [...this.list.filter((item, index) => index > 0)];
    }

    let asideList = [];
    let bottomList = [];

    if (normalPlants.length === 0) {
      asideCards.remove();
      bottomCards.remove();
    }

    if (normalPlants.length <= 4) {
      asideList = [...normalPlants];
      bottomCards.remove();
    }

    if (normalPlants.length > 4) {
      asideList = [...normalPlants.filter((item, index) => index <= 3)];
      bottomList = [...normalPlants.filter((item, index) => index > 3)];
    }

    asideList.forEach((item, index) => {
      const asideCard = new NormalCard(item, 'aside-cards', `aside-cards-${index}`, index);
      asideCard.render();
    });

    bottomList.forEach((item, index) => {
      const bottomCard = new NormalCard(item, 'bottom-cards', `bottom-cards-${index}`, index);
      bottomCard.render();
    });

    console.log('asideList: ', asideList);
    console.log('bottomList: ', bottomList);

    const button = document.createElement('button');
    button.classList.add('results-button');
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    button.innerHTML = ArrowUp;

    wrapper.appendChild(button);

    const buttonText = document.createElement('span');
    buttonText.innerText = 'back to the top';

    button.appendChild(buttonText);

  }

  delete() {
    const parentElement = document.getElementById(this.parentId);
    parentElement.innerHTML = '';
  }

  rerender(list, imgSize, isMobile) {
    this.list = [...list];
    this.imgSize = imgSize;
    this.isMobile = isMobile;

    this.delete();
    this.render();
  }
}

export default PlantsList;