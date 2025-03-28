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
        <img class="card__preview" src="${this.imgUrl}" alt="barber1">
        <h4 class="card__title subtitle4">${this.title}</h4>
        <h6 class="card__description subtitle1">
        ${this.description}
        </h6>
        <a class="barber-item card__link a4 popup-control"
        data-template-id="template-card"
        >Read full testimonial</a>
      </div>
    </div>
    `;
  }
}

customElements.define('barber-card', Card);
