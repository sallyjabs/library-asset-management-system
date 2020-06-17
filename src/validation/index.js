/* eslint-disable no-useless-escape */
/* eslint-disable newline-per-chained-call */
/* eslint-disable implicit-arrow-linebreak */
import Joi from '@hapi/joi';

export default {
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true }
    })
    .trim()
    .required(),
  name: Joi.string().alphanum().min(3).max(30).required(),
  text: Joi.string().required(),
  number: Joi.number().min(1).required(),
  nameOptional: Joi.string().alphanum().min(3).max(30).optional(),
  url: Joi.string().uri().required(),
  array: Joi.array().required(),
  boolean: Joi.boolean().required(),
  password: Joi.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_`,/@#\-"=:;~<>'\$%\^&\*\?\|\+\(\)\[\]\{}\.])(?=.{8,})/
    )
    .trim()
    .required()
    .min(1)
    .error(
      new Error(
        'Password should contain a minimum of 8 characters (upper and lowercase letters, numbers and at least one special character)'
      )
    ),
  date: Joi.date().required(),
  phone: Joi.string()
    .regex(/^[0-9]{11}/)
    .optional()
    .error(new Error('Phone number must be 11 digits')),
  stringOptional: Joi.string().trim().min(1).optional()
};
