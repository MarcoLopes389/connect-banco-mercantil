import { DataTypes, ModelDefined, Optional } from '@sequelize/core';
import { ISimulation } from 'entities/ISimulation';
import { database } from "..";

interface SimulationCreate extends Optional<ISimulation, "id"> {}

export const Simulation: ModelDefined<ISimulation, SimulationCreate> = database.connection.define('simulation', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    }
})