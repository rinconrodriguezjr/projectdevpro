//migration de users creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('applications', {
        id: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID
        }, 
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
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('applications', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}