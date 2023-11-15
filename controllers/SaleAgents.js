const {
  saleAgentInsertService,
  saleAgentUpdateService,
} = require('../services/DataServices/SaleAgentService');

const saleAgentInsert = async (req, res) => {
  const id = await saleAgentInsertService(req.body);
  res.json(id);
};
const saleAgentUpdate = async (req, res) => {
  const id = await saleAgentUpdateService(req.body, req.params.id);
  res.json(id);
};
const saleAgentGetAll = async (req, res) => {
  const result = await saleAgentGetAllService();
  res.json(result);
};
const saleAgentGetSingle = async (req, res) => {
  const result = await saleAgentGetSingleService(req.params.id);
  res.json(result);
};
const saleAgentDelete = async (req, res) => {
  const result = await saleAgentDeleteService(req.params.id);
  res.json(result);
};

module.exports = {
  saleAgentInsert,
  saleAgentUpdate,
  saleAgentGetAll,
  saleAgentGetSingle,
  saleAgentDelete,
};
