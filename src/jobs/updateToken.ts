import { IMercantilWrapper } from '../shared/containers/MercantilWrapper/IMercantilWrapper';
import { inject, injectable } from "tsyringe";
import ms from 'ms'

@injectable()
export class UpdateToken {

    private job!: NodeJS.Timeout;

    constructor(
        @inject('MercantilWrapper')
        private mercantilWrapper: IMercantilWrapper
    ) {}

    async start(): Promise<void> {
        this.job = setInterval(async () => {
            console.log('[ JOB ] Executing refresh token job...')
            await this.mercantilWrapper.auth()
        }, ms('1m'))
    }

    async stop(): Promise<void> {
        clearInterval(this.job)
    }
}