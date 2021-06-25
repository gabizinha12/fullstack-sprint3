class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._alert = new Bind(
      new Alert(),
      new AlertView($("#alertView")),
      "message"
    );

    this.allProducts();
  }

  allProducts() {
    // TODO: implementar

    // let service = new ProductsService();
    // service
    //   .allProducts()
    //   .then()
    //   .catch();

    this._alert.message = "ProductsController ainda não foi implementado.";
  }
}
