import { GetSimulationController } from '../../../../useCases/simulation/getSimulation/GetSimulationController';
import { Router } from "express";

const router = Router()

const getSimulationController = new GetSimulationController()

router.post('/simulation/antecipation', getSimulationController.handle)

export default router