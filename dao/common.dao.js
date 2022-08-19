const db = require('../database/db');
const { Op } = require('sequelize');
const create = async (data, model) => db[model].create(data);

const createOrUpdate = async (data, model, whereClause) => {
	const resp = await db[model].findOne({ where: whereClause });
	if (resp) {
		return db[model].update(data, { where: whereClause });
	} else {
		return create(data, model);
	}
};

const findByNameInCaseSensitive = async (name, model) => {
	return db[model].findOne({
		where: {
			name: {
				[Op.iLike]: name,
			},
		},
	});
};
const findSortPaginationCount = async (pageInfo, sort, option, model) => {
	return db[model].findAndCountAll({
		where: option,
		distinct: true,
		limit: pageInfo.limit,
		offset: pageInfo.skip,
		order: [sort],
	});
};

const findById = async (id, model) => db[model].findOne({ where: { id } });

const findByEmailId = async (email, model) => db[model].findOne({ where: { email } });

const updatById = async (id, updatedData, model) =>
	db[model].update(updatedData, { where: { id } });

const count = async model => db[model].count();

const countWithWhereClause = async (model, option) => {
	return db[model].count({
		where: option,
	});
};

const deleteById = async (id, model) => db[model].destroy({ where: { id } });

const statusUpdatedBy = async (userId, ids, model) =>
	db[model].update({ statusUpdatedById: userId }, { where: { id: ids } });
module.exports = {
	create,
	createOrUpdate,
	findSortPaginationCount,
	findById,
	findByEmailId,
	updatById,
	deleteById,
	count,
	countWithWhereClause,
	findByNameInCaseSensitive,
	statusUpdatedBy,
};
