import { IPartialDTO } from './IPartialDTO';
export interface IBalanceDTO {
    cpf: number,
	valorTotal: number,
	quantidadeParcelas: number,
	dataReferenciaSaldo: string,
	parcelas: IPartialDTO[]
}
