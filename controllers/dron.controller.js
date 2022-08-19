const { handleSuccessResponse } = require("../utility/handleResponse");
const { findSortPaginationCount } = require("../dao/common.dao");
const { DRON_MODEL_NAME } = require("../constant/dbModelName");
const getAllDron = (req, res, next) => {
  try {
    const { query } = req;
    const pageInfo = makePageObject(query);
    const sort = getSort(query);
    const resp = await findSortPaginationCount(
      pageInfo,
      sort,
      {},
      DRON_MODEL_NAME
    );
    return handleSuccessResponse(200,res,resp,"Dron fetch successfully")
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDron,
};
