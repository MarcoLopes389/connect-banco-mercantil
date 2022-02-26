import { IMercantilWrapper } from '../shared/containers/MercantilWrapper/IMercantilWrapper';
import { inject, injectable } from "tsyringe";
import ms from 'ms'

@injectable()
export class UpdateToken {

    private job!: NodeJS.Timeout;
    private interval = ms('30s')

    constructor(
        @inject('MercantilWrapper')
        private mercantilWrapper: IMercantilWrapper
    ) {}

    async start(): Promise<void> {
        console.log(this.interval)
        this.job = setInterval(async () => {
            console.log('[ JOB ] Executing refresh token job...')
            await this.mercantilWrapper.auth()
        }, this.interval)
    }

    async stop(): Promise<void> {
        clearInterval(this.job)
    }
}