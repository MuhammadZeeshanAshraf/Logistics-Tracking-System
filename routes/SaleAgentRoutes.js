const express = require('express');
const saleAgentRouter = express.Router();
const {
  saleAgentInsert,
  saleAgentUpdate,
  saleAgentGetAll,
  saleAgentGetSingle,
  saleAgentDelete,
} = require('../controllers/SaleAgents');
const validate = require('../validator/ValidationHandlers/SaleAgentValidationHandler');
saleAgentRouter.post('/', validate, saleAgentInsert);
saleAgentRouter.patch('/', validate, saleAgentUpdate);
saleAgentRouter.get('/', saleAgentGetAll);
saleAgentRouter.get('/:id', saleAgentGetSingle);
saleAgentRouter.delete('/:id', saleAgentDelete);
module.exports = saleAgentRouter;
