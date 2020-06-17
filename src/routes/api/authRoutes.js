/* eslint-disable */
import express from 'express';
import Users from '../../controllers/userController';
import userValidation from '../../validation/userValidation';

const router = express.Router();

router.route('/signup').post(userValidation.validateUserData, Users.createUser);

export default router;
