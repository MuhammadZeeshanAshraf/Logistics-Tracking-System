const { body } = require('express-validator');
const valMsg = require('../ValidationConstants');
const ProductDTO = require('/ContainerAPI/dto/ProductDTO');

const validate = (req) => {
  const item = new ProductDTO(req.body);
  const product = (index) => {
    return Object.keys(item)[index];
  };

  let validateArray = [];
  if (item[product(0)] !== undefined) {
    validateArray.push(
      body(product(0))
        .exists()
        .withMessage(valMsg.exists(product(0)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(product(0)))
        .trim()
        .isString()
        .withMessage(valMsg.string(product(0)))

        .escape()
    );
  }
  if (item[product(1)] !== undefined) {
    validateArray.push(
      body(product(1))
        .exists()
        .withMessage(valMsg.exists(product(1)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(product(1)))
        .trim()
        .isString()
        .withMessage(valMsg.string(product(0)))

        .escape()
    );
  }
  return validateArray;
};
module.exports = validate;
