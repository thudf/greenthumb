import Arrow from '../../assets/images/icons/arrow-down.svg'
import Icon from '../Icon';
import { isMobile } from '../../utlis/windowSize';

import './index.less';

const alt = 'arrow-down';
const id = 'arrow-down';
let width;
let height;
const parentId = 'article-banner';

const parentElement = document.getElementById(parentId);
const title = document.createElement('h1');
title.innerText = 'Find your next green friend';

parentElement.appendChild(title);

const arrow = new Icon(Arrow, alt, width, height, parentId, id);

function handleResizeWindow() {
  if (isMobile && (width !== 35 || height !== 39 )) {
    width = 35;
    height = 39;
  }

  if (!isMobile && (width !== 46 || height !== 36 )) {
    width = 46;
    height = 36;
  }

  arrow.rerender(width, height);
}
  
window.addEventListener("resize", handleResizeWindow);

handleResizeWindow();