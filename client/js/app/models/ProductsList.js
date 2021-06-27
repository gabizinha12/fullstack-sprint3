class ProductsList {
  constructor() {
    this._products = [];
    this._immutableProducts = [];
  }
  get products() {
    return [].concat(this._products);
  }
  clearProducts() {
    this._products = [];
  }
  addProducts(product) {
    this._products.push(product);
    this._immutableProducts.push(product);
  }
  filter(value) {
    const upper = (str) => str.toLocaleUpperCase();
    this._products[0] = this._immutableProducts[0].filter((e) => {
      if (upper(e._description).includes(upper(value))) {
        return e;
      }
    });

    // this._products = this._imutableproducts.filter((product) => {
    //   if (upper(product.description).includes(upper(search))) {
    //     return product;
    //   }
    // });
    console.log(value);
  }
}
