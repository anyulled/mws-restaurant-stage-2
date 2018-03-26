/**
 * Session Auth
 * @param {Object} req - request
 * @param {boolean} req.session.authenticated - authenticated user
 * @param {Object} res - response
 * @param {function} res.forbidden - indicates if the response is forbidden
 * @param {Function} next - callback function
 * @return {*}
 */
module.exports = function(req, res, next) {
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden("You are not permitted to perform this action.");
};
