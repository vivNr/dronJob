const { ORDER_MODEL_NAME } = require("../../constant/dbModelName");
module.exports = (sequelize, DataTypes) => {
  const schema = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    startsPoint: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		endsPoint: {
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
  const order = sequelize.define(ORDER_MODEL_NAME, schema, paranoidJson);
  order.associate = (model) => {
    order.belongsTo(model.item, { as: "item" });
  };
  return order;
};
