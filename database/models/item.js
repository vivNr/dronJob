const { ITEM_MODEL_NAME } = require('../../constant/dbModelName');
module.exports = (sequelize, DataTypes) => {
	const schema = {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};
	const paranoidJson = {
		paranoid: true,
	};
	 const item = sequelize.define(ITEM_MODEL_NAME, schema, paranoidJson);
	 item.associate = (model) => {
		item.belongsTo(model.dron, { as: "createdByDron" });
	  };
	  return item;
	};
