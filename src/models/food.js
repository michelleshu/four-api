"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
      // define association here
    }
  }

  Food.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Food",
    }
  );

  return Food;
};
