const { COMMAND_CENTER_MODEL_NAME } = require("../../constant/dbModelName");
module.exports = (sequelize, DataTypes) => {
  const schema = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    instructionType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructionName: {
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
  const commandCenter = sequelize.define(
    COMMAND_CENTER_MODEL_NAME,
    schema,
    paranoidJson
  );
  commandCenter.associate = (model) => {
    commandCenter.belongsTo(model.dron, { as: "dron" });
  };
  return commandCenter;
};
