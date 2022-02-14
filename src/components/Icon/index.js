class Icon {
  constructor(src, alt, width, height, parentId, id) {
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.parentId = parentId;
    this.id = id;
  }

  render() {
    const icon = document.createElement('div');

    icon.setAttribute('role', 'img');
    icon.setAttribute('alt', this.alt);
    icon.setAttribute('id', this.id);
    icon.style.width = `${this.width}px`;
    icon.style.height = `${this.height}px`;

    icon.innerHTML = this.src;

    const parentElement = document.getElementById(this.parentId);
    parentElement.appendChild(icon);

  }

  delete() {
    const icon = document.getElementById(this.id);
    icon.remove();
  }

  rerender(width, height) {
    this.width = width;
    this.height = height;

    const icon = document.getElementById(this.id);
    const hasIcon = !!icon;

    if (!!hasIcon) {
      this.delete();
      this.render();
    }

    if (!hasIcon) {
      this.render();
    }
  }
}

export default Icon
