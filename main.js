class ProductManager {
  constructor(products = []) {
    this.products = products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Error: todos los campos son obligatorios");
      return;
    }
    // Validar que no se repita el campo code
    if (this.products.some((product) => product.code === code)) {
      console.log(`Error: el código ${code} ya existe`);
      return;
    }
    // Crear el producto con un id automático
    const id = this.products.length + 1;
    const product = { id, title, description, price, thumbnail, code, stock };
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.log("Error: producto no encontrado");
    }
  }
}
