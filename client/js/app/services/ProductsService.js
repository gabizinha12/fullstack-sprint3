class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  async getProducts() {
    const products = await this._http.get("/api/products");
    return products;
  }
}
