const express = require('express');
const customerRouter = express.Router();
const {
  customerInsert,
  customerUpdate,
  customerGetAll,
  customerGetSingle,
  customerDelete,
} = require('../controllers/Customers');
const validate = require('../validator/ValidationHandlers/CustomerValidationHandler');
customerRouter.post('/', validate, customerInsert);
customerRouter.patch('/:id', validate, customerUpdate);
customerRouter.get('/', customerGetAll);
customerRouter.get('/:id', customerGetSingle);
customerRouter.delete('/:id', customerDelete);
module.exports = customerRouter;
