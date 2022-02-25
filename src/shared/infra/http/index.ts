import { app } from './app';

app.setup()

app.server.listen(3000, () => {
    console.log('[ Application ] Server is Running');
});
