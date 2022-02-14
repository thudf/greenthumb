import Empty from '../../../../assets/images/illustrations/no-results.png';

import './index.less';

class EmptyMessage {
  constructor(parentId, title, subtitle, imgSize) {
    this.parentId = parentId;
    this.title = title;
    this.subtitle = subtitle;
    this.imgSize = imgSize;
  }

  render() {
    const parentElement = document.getElementById(this.parentId);

    const leftElements = document.createElement('div');
    leftElements.setAttribute('id', 'left-box');
    const rightElements = document.createElement('div');
    rightElements.setAttribute('id', 'right-box');

    parentElement.appendChild(leftElements);
    parentElement.appendChild(rightElements);

    const title = document.createElement('h1');
    title.innerText = this.title;

    leftElements.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.innerText = this.subtitle;

    leftElements.appendChild(subtitle);

    const emptyImg = new Image();
    emptyImg.src = Empty;
    emptyImg.alt = 'No results found';
    emptyImg.width = this.imgSize.width;
    emptyImg.height = this.imgSize.height;

    rightElements.appendChild(emptyImg);
  }

  delete() {
    const parentElement = document.getElementById(this.parentId);
    parentElement.innerHTML = '';
  }

  rerender(width, height) {
    this.imgSize = { width, height };

    this.delete();
    this.render();
  }
}

export default EmptyMessage;