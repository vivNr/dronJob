
const makePageObject = query => {
	const pageObject = { skip: 0, limit: 10 };
	if (query.pageNo && query.pageSize) {
		const pageNo = parseInt(query.pageNo, 10);
		const pageSize = parseInt(query.pageSize, 10);
		if (isFinite(pageNo) && isFinite(pageSize)) {
			const skip = (pageNo - 1) * pageSize;
			const limit = pageSize;
			pageObject.skip = skip;
			pageObject.limit = limit;
			return pageObject;
		}
	}
	return pageObject;
};
const getSort = (query, module) => {
    const { sortBy, order } = query;
	if(!sortBy ||  !order){
        return ["updatedAt","desc"]
    }
};
module.exports = {
	makePageObject,
	getSort,
};
