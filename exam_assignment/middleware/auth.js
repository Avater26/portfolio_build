module.exports = function (req, res, next) {
  if (!req.session) {
    res.redirect("/exam/login");
    return;
  }
  if (req.session.isLoggedIn) {
    return next();
  }
  res.redirect("/exam/login");
  return;
};
