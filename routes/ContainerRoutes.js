const express = require('express');
const containerRouter = express.Router();
const {
  containerInsert,
  containerUpdate,
  containerGetAll,
  containerGetSingle,
  containerDelete,
} = require('../controllers/Container');
const validate = require('../validator/ValidationHandlers/ContainerValidationHandler');
containerRouter.post('/', validate, containerInsert);
containerRouter.patch('/:id', validate, containerUpdate);
containerRouter.get('/', containerGetAll);
containerRouter.get('/:id', containerGetSingle);
containerRouter.delete('/:id', containerDelete);
module.exports = containerRouter;
