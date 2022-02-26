import { DataTypes, ModelDefined, Optional } from '@sequelize/core';
import { ISimulation } from 'entities/ISimulation';
import { database } from "..";
database.connect()

export interface SimulationCreate extends Optional<ISimulation, "id"> {}

export const Simulation: ModelDefined<ISimulation, SimulationCreate> = database.connection.define('simulation', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true
    },
    cpf: {
        type: DataTypes.NUMBER
    },
    cep: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.STRING
    },
    simulationDate: {
        type: DataTypes.DATE
    },
    taxaJurosAno: {
        type: DataTypes.NUMBER
    },
    taxaJurosMes: {
        type: DataTypes.NUMBER
    },
    valorEmprestimo: {
        type: DataTypes.NUMBER
    },
    valorFinanciado: {
        type: DataTypes.NUMBER
    },
    valorTotal: {
        type: DataTypes.NUMBER
    }
})