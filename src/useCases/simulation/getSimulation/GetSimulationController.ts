import { GetSimulationUseCase } from './GetSimulationUseCase';

import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetSimulationController {
    async handle (req: Request, res: Response): Promise<Response> {
        const { cep, cpf, phone, name, birthday } = req.body
        const getSimulationUseCase = container.resolve(GetSimulationUseCase);
        const simulation = await getSimulationUseCase.execute({cep, cpf, name, birthday, phone})
        return res.json(simulation)
    }
}