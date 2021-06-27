class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http
      .getProducts("api/products")
      .then((products) => {
        return products.map(
          (product) =>
            new Product(product.image, product.description, product.price)
        );
      })
      .catch((err) => {
        console.error(err);
        throw new Error("Não foi possível obter os produtos");
      });
  }
}
