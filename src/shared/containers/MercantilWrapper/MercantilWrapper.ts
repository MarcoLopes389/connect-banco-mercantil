import { IBalanceDTO } from 'dtos/IBalanceDTO';
import { ISimulationDTO } from 'dtos/ISimulationDTO';
import { IMercantilWrapper } from './IMercantilWrapper';
import axios from 'axios'

export class MercantilWrapper implements IMercantilWrapper {

    private token!: string;

    async auth(): Promise<void> {
        const { data } = await axios.post(process.env.AUTH_URL as string)
        this.token = data
    }
    getBalance(): Promise<IBalanceDTO> {
        throw new Error('Method not implemented.');
    }
    simulateAntecipation(): Promise<ISimulationDTO> {
        throw new Error('Method not implemented.');
    }

}