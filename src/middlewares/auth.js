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
    // Action required

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
