/* eslint-disable */
import userService from '../services/userService';

class Users {
  static async createUser(req, res, next) {
    const user = req.body;
    try {
      const data = await userService.createUser(user);

      return res.status(201).json({
        status: 201,
        message: 'User has been created successfully',
        data
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default new Users();
