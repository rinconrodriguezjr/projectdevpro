'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Applications.belongsTo(models.Users,{as:'user', foreignKey:'user_id'})
      Applications.hasMany(models.ApplicationsPhotos, {as:'photos', foreignKey: 'application_id'})
      Applications.hasMany(models.ApplicationsDocuments, {as:'documents', foreignKey: 'application_id'})
      Applications.hasMany(models.ApplicationsPayments, {as:'payments', foreignKey: 'application_id'})
    }
  }
  Applications.init({
    User_Id: {
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
    legal_first_names: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    legal_last_names: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    nationality: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    phone: {
      allowNull: false,
      type: Sequelize.STRING
    },
    date_of_birth: {
      allowNull: false,
      type: Sequelize.DATE
    },
    genre: {
      allowNull: false,
      type: Sequelize.STRING
    },
    passport_number: {
      allowNull: false,
      type: Sequelize.STRING
    },
    passport_expiration_date: {
      allowNull: false,
      type: Sequelize.DATE
    },
    residence: {
      allowNull: false,
      type: Sequelize.STRING
    },
    residence_address: {
      allowNull: false,
      type: Sequelize.STRING
    },
    job : {
      allowNull: false,
      type: Sequelize.STRING
    },
    comments: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    status: {
      allowNull: false,
      type: Sequelize.STRING
    },
    sequelize,
    modelName: 'Applications',
    tableName: 'applications',
    underscored: true,
    timestamps: true,
  });
  return Applications;
};