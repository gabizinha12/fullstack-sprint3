class ProductsList {
  constructor() {
    this._products = [];
  }
  get products() {
    return [].concat(this._products);
  }
  clearProducts() {
    this._products = [];
  }
  addProducts(product) {
    this._products.push(product);
  }
}
