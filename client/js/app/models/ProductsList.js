class ProductsList {
  constructor() {
    this._products = [];
  }
  get products() {
    return [].concat(this._products);
  }
}
