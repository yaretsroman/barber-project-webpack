import './card.scss';

class Card extends HTMLElement {
  constructor() {
    super();
    this.imgUrl = this.getAttribute('img-url');
    this.title = this.getAttribute('title');
    this.description = this.getAttribute('description');
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="swiper-slide">
      <div class="barber-item">
        <img class="preview" src="${this.imgUrl}" alt="barber">
        <h4 class="title subtitle4">${this.title}</h4>
        <h6 class="description subtitle1">
        ${this.description}
        </h6>
      </div>
    </div>
    `;
  }
}

customElements.define('barber-card', Card);
