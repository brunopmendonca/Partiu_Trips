'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gasto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gasto.belongsTo(models.Viagem)
      // define association here
    }
  };
  Gasto.init({
    lista: DataTypes.STRING,
    viagemId: DataTypes.INTEGER,
    valor: DataTypes.STRING,
    quantidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gasto',
  });
  return Gasto;
};