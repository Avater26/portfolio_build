module.exports = function (req, res, next) {
  if (req.session.user === parseInt(req.params.id)) {
    return next();
  }
  res.redirect("/exam/profile/" + req.session.user);
  return;
};
