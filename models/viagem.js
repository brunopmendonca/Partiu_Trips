'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Viagem.belongsTo(models.User)
      Viagem.hasMany(models.Gasto)

      // define association here
    }
  };
  Viagem.init({
    ida: DataTypes.STRING,
    volta: DataTypes.STRING,
    lugar: DataTypes.STRING,
    imagem: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Viagem',
  });
  return Viagem;
};