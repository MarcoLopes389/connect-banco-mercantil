import { ICorrespondentDTO } from 'dtos/ICorrespondentDTO';
import { IPartialDTO } from 'dtos/IPartialDTO';
import { IBalanceDTO } from 'dtos/IBalanceDTO';
import { ISimulationDTO } from 'dtos/ISimulationDTO';
import { IMercantilWrapper } from './IMercantilWrapper';
import axios from 'axios';

export class MercantilWrapper implements IMercantilWrapper {
    private token!: string;

    constructor() {
        this.auth()
    }

    async auth(): Promise<void> {
        const { data } = await axios.post(process.env.AUTH_URL as string);
        this.token = data.access_token;
    }

    async getBalance(cpf: number): Promise<IBalanceDTO> {
        const api = axios.create({
            baseURL: process.env.SIMULATION_URL as string,
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        const { data } = await api.get(
            `/Clientes/${cpf}/SaquesAniversario/Saldo`
        );
        return data;
    }

    async simulateAntecipation(
        Cpf: number, 
        parcelas: IPartialDTO[], 
    ): Promise<ISimulationDTO> {
        const correspondente: ICorrespondentDTO = {
            usuarioDigitador:"****", 
		    cpfAgenteCertificado: 09000000,
		    ufAtuacao: "**"
        }
        const api = axios.create({
            baseURL: process.env.SIMULATION_URL as string,
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        const response = await api.post('/Simulacoes/Fgts',
        {
            Cpf,
            parcelas,
            correspondente
        });
        return response.data;
    }
}
