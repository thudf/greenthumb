import './index.less';

class QuestionCard {
  constructor(questionAttr, parentId) {
    this.src = questionAttr.img;
    this.alt = questionAttr.alt;
    this.width = questionAttr.width;
    this.height = questionAttr.height;
    this.text = questionAttr.text;
    this.parentId = parentId;
    this.selectId = questionAttr.selectId;
    this.options = questionAttr.options;
    this.onselect = questionAttr.onSelect;
  }

  render() {
    const article = document.getElementById(this.parentId);

    const card = document.createElement('div');
    card.classList.add('question-card');

    article.appendChild(card);

    const imgWrapper = document.createElement('div');

    card.appendChild(imgWrapper);

    const img = new Image();
    img.src = this.src;
    img.alt = this.alt;
    img.setAttribute('width', this.width);
    img.setAttribute('height', this.height);

    imgWrapper.appendChild(img);

    const textWrapper = document.createElement('div');
    textWrapper.innerHTML = this.text;

    card.appendChild(textWrapper);

    const select = document.createElement('select');
    select.id = this.selectId;
    select.onchange = e => this.onselect(e);

    card.appendChild(select);

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.text = 'Select...';
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.hidden = true;

    select.appendChild(placeholder);

    this.options.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt;
      option.text = opt;
      select.appendChild(option);
    });
  }
}

export default QuestionCard;