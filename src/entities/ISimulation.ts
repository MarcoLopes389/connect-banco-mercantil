export interface ISimulation {
    id?: string;
    cpf: number;
    cep: string;
    name: string;
    phone: string
    birthday: string;
    simulationDate: string;
    taxaJurosAno: number;
    taxaJurosMes: number;
    valorEmprestimo: number;
    valorFinanciado: number;
    valorTotal: number;
}