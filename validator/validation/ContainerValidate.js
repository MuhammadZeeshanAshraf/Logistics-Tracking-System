const { body } = require('express-validator');
const valMsg = require('../ValidationConstants');
const ContainerDTO = require('/ContainerAPI/dto/ContainerDTO');

const validate = (req) => {
  const item = new ContainerDTO(req.body);

  const container = (index) => {
    return Object.keys(item)[index];
  };

  let validateArray = [];
  if (item[container(0)] !== undefined) {
    validateArray.push(
      body(container(0))
        .exists()
        .withMessage(valMsg.exists(container(0)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(container(0)))
        .trim()
        .isString()
        .withMessage(valMsg.string(container(0)))
        .matches(/^[A-Z]{3}-\d+$/)
        .withMessage(valMsg.format(container(0)))
        .escape()
    );
  }
  if (item[container(1)] !== undefined) {
    validateArray.push(
      body(container(1))
        .exists()
        .withMessage(valMsg.exists(container(1)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(container(1)))
        .trim()
        .isNumeric()
        .withMessage(valMsg.number(container(1)))

        .isInt({ min: 0 })
        .withMessage(valMsg.nonNegative(container(1)))
        .escape()
    );
  }

  if (item[container(2)] !== undefined) {
    validateArray.push(
      body(container(2))
        .exists()
        .withMessage(valMsg.exists(container(2)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(container(2)))
        .trim()
        .isString()
        .withMessage(valMsg.string(container(0)))

        .escape()
    );
  }
  if (item[container(3)] !== undefined) {
    validateArray.push(
      body(container(3))
        .exists()
        .withMessage(valMsg.exists(container(3)))
        .not()
        .isEmpty()
        .withMessage(valMsg.empty(container(3)))
        .trim()
        .isNumeric()
        .withMessage(valMsg.number(container(3)))

        .isInt({ min: 0 })
        .withMessage(valMsg.nonNegative(container(3)))
        .escape()
    );
  }

  return validateArray;
};

module.exports = validate;
