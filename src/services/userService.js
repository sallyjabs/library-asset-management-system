/* eslint-disable*/
import User from '../models/Users';

class userService {
  /**
   * Creates a new user.
   * @param {object} user - user object.
   * @returns {object} - created user object
   */
  static async createUser(user) {
    try {
      const data = await User.create(user);

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default userService;
