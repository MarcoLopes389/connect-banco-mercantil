import { IBalanceDTO } from "dtos/IBalanceDTO";
import { ISimulationDTO } from "dtos/ISimulationDTO";

export interface IMercantilWrapper {
    auth(): Promise<void>
    getBalance(): Promise<IBalanceDTO>
    simulateAntecipation(): Promise<ISimulationDTO>
}