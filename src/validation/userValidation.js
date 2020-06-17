/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import Joi from '@hapi/joi';
import Format from './index';
import validator from '../utils/Validator';

class userValidation {
  static validateUserData(req, res, next) {
    const format = Joi.object().keys(
      {
        email: Format.email,
        password: Format.password
      },
      {}
    );
    validator(format, req.body, res, next);
  }
}

export default userValidation;
