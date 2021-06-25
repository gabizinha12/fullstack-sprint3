class Product {
  constructor(description, image, price) {
  this._description = description;
  this._image = image;
  this._price = price;
  Object.freeze(this); // "congela" instancia do objeto
  }
  getDescription() {
  return this._description;
  }
  getImage() {
  return this._image;
  }
  getPrice() {
  return this._price;
  }
}
