const { body } = require('express-validator');
const valMsg = require('../ValidationConstants');
const SaleAgentDTO = require('/ContainerAPI/dto/SaleAgentDTO');

const validate = (req) => {
  const item = new SaleAgentDTO(req.body);
  const saleAgent = (index) => {
    return Object.keys(item)[index];
  };
  let validateArray = [];
  if (item[saleAgent(0)] !== undefined) {
    validateArray.push(
      body(saleAgent(0))
        .exists()
        .withMessage(valMsg.exists(saleAgent(0)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(saleAgent(0)))
        .trim()
        .isString()
        .withMessage(valMsg.string(saleAgent(0)))

        .escape()
    );
  }
  if (item[saleAgent(1)] !== undefined) {
    validateArray.push(
      body(saleAgent(1))
        .exists()
        .withMessage(valMsg.exists(saleAgent(1)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(saleAgent(1)))
        .trim()
        .isString()
        .withMessage(valMsg.string(saleAgent(0)))

        .escape()
    );
  }
  return validateArray;
};
module.exports = validate;
