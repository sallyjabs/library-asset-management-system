/* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */
import userService from '../services/userService';
import SessionHandler from '../utils/SessionHandler';
import Password from '../utils/Password';

class Users {
  static async createUser(req, res, next) {
    const user = req.body;
    const result = {};
    try {
      const userExists = await userService.userData({ email: user.email });
      if (userExists !== null) {
        return res.status(409).json({
          status: 409,
          message: 'User already exists',
          error: 'Conflict Error'
        });
      }

      const passwordObj = new Password(user);
      const newPassword = await passwordObj.encryptPassword();
      user.password = newPassword;

      const data = await userService.createUser(user);
      result._id = data._id;
      result.email = data.email;
      result.active = data.active;
      result.role = data.role;
      result.token = await SessionHandler.generateToken(data);

      return res.status(201).json({
        status: 201,
        message: 'User has been created successfully',
        result
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default Users;
