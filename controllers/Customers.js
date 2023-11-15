const {
  customerInsertService,
  customerUpdateService,
} = require('../services/DataServices/CustomerService');

const customerInsert = async (req, res) => {
  const id = await customerInsertService(req.body);
  res.json(id);
};
const customerUpdate = async (req, res) => {
  console.log(req.params);
  const id = await customerUpdateService(req.body, req.params.id);
  res.json(id);
};
const customerGetAll = async (req, res) => {
  const result = await customerGetAllService();
  res.json(result);
};
const customerGetSingle = async (req, res) => {
  const result = await customerGetSingleService(req.params.id);
  res.json(result);
};
const customerDelete = async (req, res) => {
  const result = await customerDeleteService(req.params.id);
  res.json(result);
};

module.exports = {
  customerInsert,
  customerUpdate,
  customerGetAll,
  customerGetSingle,
  customerDelete,
};
