const noCacheVercel = (req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  return next();
};

module.exports = noCacheVercel;
