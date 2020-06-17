/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import jwt from 'jsonwebtoken';

/** Class managing user sessions */
class SessionHandler {
  /**
   * Generates a jwt token.
   * @param {object} data - User details.
   * @returns {string} token.
   */
  static generateToken(data) {
    const token = jwt.sign(
      {
        _id: data._id,
        email: data.email,
        role: data.role,
        active: data.active
      },
      data.secret || process.env.TOKEN_SECRET,
      { expiresIn: '24hr' }
    );
    return token;
  }

  /**
   * Decodes a token
   * @param {object} data - User details.
   * @returns {object} User object
   */
  static decodeToken(data) {
    try {
      return jwt.verify(data.token, data.secret || process.env.TOKEN_SECRET);
    } catch (error) {
      throw error;
    }
  }
}

export default SessionHandler;
