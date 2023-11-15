const {
  productInsertService,
  productUpdateService,
  productGetAllService,
  productGetSingleService,
  productDeleteService,
} = require('../services/DataServices/ProductService');

const productInsert = async (req, res) => {
  const id = await productInsertService(req.body);
  res.json(id);
};
const productUpdate = async (req, res) => {
  const id = await productUpdateService(req.body, req.params.id);
  res.json(id);
};
const productGetAll = async (req, res) => {
  const result = await productGetAllService();
  res.json(result);
};
const productGetSingle = async (req, res) => {
  const result = await productGetSingleService(req.params.id);
  res.json(result);
};
const productDelete = async (req, res) => {
  const result = await productDeleteService(req.params.id);
  res.json(result);
};
module.exports = {
  productInsert,
  productUpdate,
  productGetAll,
  productGetSingle,
  productDelete,
};
