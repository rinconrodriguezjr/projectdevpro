'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersStrike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersStripe.belongsTo(models.Users, {as: 'user', foreignKey: 'user_id'})
    }
  }
  UsersStrike.init({
    user_id: {
      allowNull: false,
      primaryKey:true,
      foreignKey:true,
      type: Sequelize.UUID,
      onUpdate: 'CASCADE', 
      onDelete: 'RESTRICT'
  },
  client_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
    sequelize,
    modelName: 'UsersStrike',
    tableName: 'usersstrikes',
    underscored: true,
    timestamps: true,
  });
  return UsersStrike;
};