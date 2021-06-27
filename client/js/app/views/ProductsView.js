class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    const { _products } = data;
    return `
    <div class="products__row">
    <ol class="products__list">
    ${
      _products[0]
        ? _products[0]
            .map(
              (product) => `
      <li class="products__card">
        <div class="card">
          <img
            class="card__img"
            src="${product._image}"
            alt="${product._description}"
          />
          <p class="card__description">
          ${product._description}
          </p>
          <p class="card__price">
         R$ ${product._price}
          </p>
        </div>
      </li>
    `
            )
            .join("")
        : "undefined"
    }
      </ol>
      </div>
      `;
  }
}
