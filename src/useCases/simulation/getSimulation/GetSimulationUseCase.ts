import { ISimulationDTO } from 'dtos/ISimulationDTO';
import { ISimulationRepository } from 'repositories/ISimulationRepository';
import { IBalanceDTO } from 'dtos/IBalanceDTO';
import { IRequest } from './types';
import { IMercantilWrapper } from 'shared/containers/MercantilWrapper/IMercantilWrapper';
import { inject, injectable } from "tsyringe";
import { convertBalance } from '../../../utils/convertBalance';
import { randomUUID } from 'crypto';

@injectable()
export class GetSimulationUseCase {

    constructor(
        @inject('MercantilWrapper')
        private mercantilWrapper: IMercantilWrapper,
        @inject('SimulationRepository')
        private simulationRepository: ISimulationRepository
    ) {}

    async execute (user: IRequest) {
        const balance: IBalanceDTO = await this.mercantilWrapper.getBalance(user.cpf)
        const simulation: ISimulationDTO = await this.mercantilWrapper.simulateAntecipation(
            user.cpf,
            convertBalance(balance.parcelas)
        )
        const date = new Date()
        await this.simulationRepository.saveSimulation({
            id: randomUUID(),
            cpf: user.cpf,
            cep: user.cep,
            name: user.name,
            phone: user.phone,
            birthday: user.birthday,
            simulationDate: date.toString(),
            taxaJurosAno: simulation.taxaJurosAno,
            taxaJurosMes: simulation.taxaJurosMes,
            valorEmprestimo: simulation.valorEmprestimo,
            valorFinanciado: simulation.valorFinanciado,
            valorTotal: simulation.valorSomatorioParcelas,
        })
        return simulation
    }
}