'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('simulations', {
      id: {
        type: Sequelize.DataTypes.UUID,
      },
      cpf: Sequelize.DataTypes.INTEGER,
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
        type: Sequelize.DataTypes.INTEGER
      },
      taxaJurosMes: {
        type: Sequelize.DataTypes.INTEGER
      },
      valorEmprestimo: {
        type: Sequelize.DataTypes.INTEGER
      },
      valorFinanciado: {
        type: Sequelize.DataTypes.INTEGER
      },
      valorTotal: {
        type: Sequelize.DataTypes.INTEGER
      }
    }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('simulation')
  }
};
