class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(
      new Alert(),
      new AlertView($("#alertView")),
      "message"
    );

    this._allProducts = new Bind(
      new ProductsList(),
      new ProductsView($("#products")),
      "addProducts",
      "clearProducts"
    );
    this.addProducts();
  }

  addProducts() {
    let productsService = new ProductsService();
    productsService
      .allProducts()
      .then((response) => {
        response.forEach((products) => {
          this._allProducts.addProducts(products);
        });
        this._alert.message = "Produtos importados com sucesso";
      })
      .catch((error) => {
        this._alert.message = error;
      });
    this._alert.message = "ProductsController ainda não foi implementado.";
  }
  clearProducts() {
    this._allProducts.clearProducts();
  }
}
