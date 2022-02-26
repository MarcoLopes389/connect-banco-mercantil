import { Simulation } from './../entities/Simulation';
import { ISimulation } from 'entities/ISimulation';
import { ISimulationRepository } from 'repositories/ISimulationRepository';

export class SimulationRepository implements ISimulationRepository {
    async saveSimulation(data: ISimulation): Promise<void> {
        try {
            await Simulation.create(data)
        } catch(e) {
            console.log(e)
            throw new Error('Do not save the simulation!')
        }
    }
}