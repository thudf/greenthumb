import EmptyMessage from './components/EmptyMessage';
import PlantsList from './components/PlantsList';
import { isMobile } from '../../utlis/windowSize';

import './index.less';

const parentId = 'article-results';

const title = 'No results yet…';
const subtitle = 'Use the filters above to find the plant that best fits your environment :)';
let width;
let height;
let results;
let imgSize = {
  width: 0,
  height: 0,
};

const empty = new EmptyMessage(parentId, title, subtitle, { width, height });
const plantsList = new PlantsList([], parentId, imgSize, isMobile);

function handleResizeWindow() {
  empty.delete();

  if (!results || results.length === 0) {
    if (isMobile) {
      if (width !== 86 || height !== 166) {
        width = 86;
        height = 166;
      }
    
      empty.rerender(width, height);
    }
  
    if (!isMobile) {
      if (width !== 106 || height !== 205) {
        width = 106;
        height = 205;
      }
  
      empty.rerender(width, height);
    }
  }

  if (results && results.length > 0) {
    if (isMobile) {
      if (imgSize.width !== 146 || imgSize.height !== 74) {
        imgSize.width = 146;
        imgSize.height = 74;
      }

      plantsList.rerender(results, imgSize, isMobile);
    }
  
    if (!isMobile) {
      if (imgSize.width !== 158 || imgSize.height !== 78) {
        imgSize.width = 158;
        imgSize.height = 78;
      }

      plantsList.rerender(results, imgSize, isMobile);
    }
  }
}

function handleNewResults(e) {
  results = !!e ? [...e.detail] : [];

  if (!!e) {
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      resultsSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, 300);
  }

  if (!e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleResizeWindow();
}
  
window.addEventListener("resize", handleResizeWindow);
window.addEventListener('new_plants_list', handleNewResults);

handleResizeWindow();
handleNewResults();

