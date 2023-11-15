class order {
  constructor(order) {
    this.container_id = order.container_id;
    this.customer_id = order.customer_id;
    this.sale_agent_id = order.sale_agent_id;
    this.quantity = order.quantity;
    this.rate = order.rate;
  }
}

module.exports = order;
