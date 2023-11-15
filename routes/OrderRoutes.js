const express = require('express');
const orderRouter = express.Router();
const {
  orderInsert,
  orderUpdate,
  orderGetAll,
  orderGetSingle,
  orderDelete,
  orderReport,
} = require('../controllers/Orders');
const validate = require('../validator/ValidationHandlers/OrderValidationHandler');
orderRouter.get('/report', orderReport);
orderRouter.post('/', validate, orderInsert);
orderRouter.patch('/:id', validate, orderUpdate);
orderRouter.get('/', orderGetAll);
orderRouter.get('/:id', orderGetSingle);
orderRouter.delete('/:id', orderDelete);

module.exports = orderRouter;
