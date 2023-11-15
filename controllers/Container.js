const {
  containerInsertService,
  containerUpdateService,
} = require('../services/DataServices/ContainerService');

const containerInsert = async (req, res) => {
  const id = await containerInsertService(req.body);
  res.json(id);
};
const containerUpdate = async (req, res) => {
  const id = await containerUpdateService(req.body, req.params.id);
  res.json(id);
};
const containerGetAll = async (req, res) => {
  const result = await containerGetAllService();
  res.json(result);
};
const containerGetSingle = async (req, res) => {
  const result = await containerGetSingleService(req.params.id);
  res.json(result);
};
const containerDelete = async (req, res) => {
  const result = await containerDeleteService(req.params.id);
  res.json(result);
};

module.exports = {
  containerInsert,
  containerUpdate,
  containerGetAll,
  containerGetSingle,
  containerDelete,
};
