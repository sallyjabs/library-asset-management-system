/* eslint-disable require-jsdoc */
import User from '../models/Users';

class userService {
  static async createUser(user) {
    try {
      const data = await User.create(user);

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async userData(param) {
    try {
      const data = await User.findOne(param);

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default userService;
