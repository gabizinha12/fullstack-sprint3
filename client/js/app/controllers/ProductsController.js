class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(
      new Alert(),
      new AlertView($("#alertView")),
      "message"
    );

    this._products = new Bind(
      new ProductsList(),
      new ProductsView($("#products")),
      "addProducts",
      "filter",
      "clearProducts"
    );
    this.allProducts();
  }

  async allProducts() {
    let productsService = new ProductsService();
    const products = await productsService.getProducts();
    let data = products.map(
      (product) =>
        new Product(product.description, product.image, product.value)
    );
    this._products.addProducts(data);
  }
  clearProducts() {
    this._allProducts.clearProducts();
  }
  searchProducts(ths) {
    this._products.filter(ths.value);
  }
}
