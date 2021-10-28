exports.getList = function (req, res) {
  const limit = req.params.limit || 10;
  const orderBy = req.params.orderBy || "createdAt";
  const offset = req.params.offset || 0;
};
