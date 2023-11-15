class Container {
  constructor(container) {
    this.container_number = container.container_number;
    this.quantity = container.quantity;
    this.vendor = container.vendor;
    this.product_skus_id = container.product_skus_id;
  }
}

module.exports = Container;
