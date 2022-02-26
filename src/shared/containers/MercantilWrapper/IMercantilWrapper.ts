import { ICorrespondentDTO } from 'dtos/ICorrespondentDTO';
import { IPartialDTO } from 'dtos/IPartialDTO';
import { IBalanceDTO } from 'dtos/IBalanceDTO';
import { ISimulationDTO } from 'dtos/ISimulationDTO';

export interface IMercantilWrapper {
    auth(): Promise<void>;
    getBalance(cpf: number): Promise<IBalanceDTO>;
    simulateAntecipation(
        Cpf: number, 
        parcelas: IPartialDTO[]
    ): Promise<ISimulationDTO>;
}
