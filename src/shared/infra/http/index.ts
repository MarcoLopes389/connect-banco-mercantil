import { MercantilWrapper } from './../../containers/MercantilWrapper/MercantilWrapper';
import { app } from './app';

app.setup();

app.server.listen(3004, async () => {
    console.log('[ Application ] Server is Running');
});
