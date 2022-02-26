import { SimulationRepository } from './../infra/sequelize/repositories/SimulationRepository';
import { ISimulationRepository } from './../../repositories/ISimulationRepository';
import { MercantilWrapper } from './MercantilWrapper/MercantilWrapper';
import { IMercantilWrapper } from './MercantilWrapper/IMercantilWrapper';
import { container } from "tsyringe";

container.registerSingleton<IMercantilWrapper>('MercantilWrapper', MercantilWrapper)
container.registerSingleton<ISimulationRepository>('SimulationRepository', SimulationRepository)