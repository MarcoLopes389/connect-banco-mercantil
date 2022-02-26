export interface ISimulationDTO {
    id: string;
    valorEmprestimo: number;
    valorFinanciado: number;
    valorIof: number;
    valorTac: number;
    taxaJurosMes: number;
    taxaJurosAno: number;
    dataPrimeiroVencimento: string;
    diaVencimentoParcela: number;
    dataMovimento: string;
    valorSomatorioParcelas: number;
    valorTarifa: number;
    taxaEfetivaMes: number;
    taxaEfetivaAno: number;
    calculoParcelas: [
        {
            numeroParcela: number;
            dataParcela: number;
            valorParcela: number;
            valorJurosParcela: number;
            valorTotalParcela: number;
            valorIof: number;
            vercentualJurosParcela: number;
        }
    ]
}
