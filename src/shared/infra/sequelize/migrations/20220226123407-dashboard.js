'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('simulations', {
      id: {
        type: Sequelize.DataTypes.UUID,
      },
      cpf: Sequelize.DataTypes.BIGINT,
      cep: Sequelize.DataTypes.STRING,
      name: Sequelize.DataTypes.STRING,
      phone: {
        type: Sequelize.DataTypes.STRING
      },
      birthday: {
        type: Sequelize.DataTypes.STRING
      },
      simulationDate: {
        type: Sequelize.DataTypes.DATE
      },
      taxaJurosAno: {
        type: Sequelize.DataTypes.FLOAT
      },
      taxaJurosMes: {
        type: Sequelize.DataTypes.FLOAT
      },
      valorEmprestimo: {
        type: Sequelize.DataTypes.FLOAT
      },
      valorFinanciado: {
        type: Sequelize.DataTypes.FLOAT
      },
      valorTotal: {
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      }
    }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('simulation')
  }
};
