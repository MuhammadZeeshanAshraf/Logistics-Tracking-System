const { body } = require('express-validator');
const valMsg = require('../ValidationConstants');
const CustomerDTO = require('/ContainerAPI/dto/CustomerDTO');

const validate = (req) => {
  const item = new CustomerDTO(req.body);
  const customer = (index) => {
    return Object.keys(item)[index];
  };

  let validateArray = [];
  if (item[customer(0)] !== undefined) {
    validateArray.push(
      body(customer(0))
        .exists()
        .withMessage(valMsg.exists(customer(0)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(customer(0)))
        .trim()
        .isString()
        .withMessage(valMsg.string(customer(0)))
        .matches(/^[A-Za-z]+$/)
        .withMessage(valMsg.format(customer(0)))

        .escape()
    );
  }

  if (item[customer(1)] !== undefined) {
    validateArray.push(
      body(customer(1))
        .exists()
        .withMessage(valMsg.exists(customer(1)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(customer(1)))
        .trim()
        .isString()
        .withMessage(valMsg.string(customer(0)))

        .matches(/^\+923\d{9}$/)
        .withMessage(valMsg.format(customer(1)))

        .escape()
    );
  }
  if (item[customer(2)] !== undefined) {
    validateArray.push(
      body(customer(2))
        .exists()
        .withMessage(valMsg.exists(customer(2)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(customer(2)))
        .trim()
        .isString()
        .withMessage(valMsg.string(customer(0)))
        .matches(/^PK\d{2}[A-Za-z]{4}\d{16}$/)
        .withMessage(valMsg.format(customer(2)))

        .escape()
    );
  }
  if (item[customer(3)] !== undefined) {
    validateArray.push(
      body(customer(3))
        .exists()
        .withMessage(valMsg.exists(customer(3)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(customer(3)))
        .trim()
        .isString()
        .withMessage(valMsg.string(customer(3)))

        .escape()
    );
  }
  if (item[customer(4)] !== undefined) {
    validateArray.push(
      body(customer(4))
        .exists()
        .withMessage(valMsg.exists(customer(4)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(customer(4)))
        .trim()
        .isString()
        .withMessage(valMsg.string(customer(4)))

        .escape()
    );
  }

  return validateArray;
};
module.exports = validate;
