const { DRON_MODEL_NAME } = require("../../constant/dbModelName");
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
    cuurentLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Parking spot",
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const paranoidJson = {
    paranoid: true,
  };
  const dron = sequelize.define(DRON_MODEL_NAME, schema, paranoidJson);
  dron.associate = (model) => {
    dron.hasOne(model.commandCenter);
    dron.hasOne(model.item);

  };
  return dron;
};
