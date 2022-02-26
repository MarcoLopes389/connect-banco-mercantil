import { IPartialDTO } from '../dtos/IPartialDTO';

export const convertBalance = (parcelas: IPartialDTO[]) => {
    const newPartials: IPartialDTO[] = []
    parcelas.map((element: IPartialDTO) => {
        newPartials.push({
            dataVencimento: element.dataRepasse,
            valor: element.valor
        })
    })
    parcelas = newPartials
    return parcelas
}