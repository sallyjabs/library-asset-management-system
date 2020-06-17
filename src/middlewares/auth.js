/* eslint-disable */
import SessionHandler from '../utils/SessionHandler';
import Response from '../utils/Response';
import userService from '../services/userService';

const auth = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({
      status: 401,
      message: 'Authentication token required',
      error: 'Authentication Error'
    });
  }

  try {
    const token = authorizationHeader.split(' ')[1];
    const payload = await SessionHandler.decodeToken({ token });

    const { email } = payload;
    // check db for updated active status and user role not from token
    const { active, role } = await userService.getUser({
      email: email
    });
    payload.active = active;
    payload.role = role;

    if (active === false) {
      return Response.authenticationError(res, 'User account is disabled');
    }

    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: 'Invalid or expired token',
      error: 'Authentication Error'
    });
  }
};

export default auth;
