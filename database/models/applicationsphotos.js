'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationsPhotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    ApplicationsPhotos.belongsTo(models.Applications, {as:'application', foreignKey:'application_id'})
    }
  }
  ApplicationsPhotos.init({
    application_Id: {
      allowNull: false,
      primaryKey:true,
      type: Sequelize.UUID,
      foreignKey:true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE', 
      onDelete: 'RESTRICT'
    },
    url: {
      type: Sequelize.TEXT
    },
    order: {
      type: Sequelize.INTEGER
    }, 
    sequelize,
    modelName: 'ApplicationsPhotos',
    tableName: 'applicationsPhotos',
    underscored: true,
    timestamps: true,
  });
  return ApplicationsPhotos;
};