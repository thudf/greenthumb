import Logo from '../../assets/images/icons/logo-white.svg';
import Icon from '../Icon';
import { isMobile } from '../../utlis/windowSize';

import './index.less';

const alt = 'greenthum-logo';
const id = 'logo';
let width;
let height;
const parentId = 'nav';

const logo = new Icon(Logo, alt, width, height, parentId, id);

function handleResizeWindow() {
  if (isMobile && (width !== 163 || height !== 20 )) {
    width = 163;
    height = 20;
  }

  if (!isMobile && (width !== 209 || height !== 25 )) {
    width = 209;
    height = 25;
  }

  logo.rerender(width, height);
}
  
window.addEventListener("resize", handleResizeWindow);

handleResizeWindow();