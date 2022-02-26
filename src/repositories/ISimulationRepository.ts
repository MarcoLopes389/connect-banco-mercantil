import { ISimulation } from 'entities/ISimulation';
export interface ISimulationRepository {
    saveSimulation(data: ISimulation): Promise<void>
}