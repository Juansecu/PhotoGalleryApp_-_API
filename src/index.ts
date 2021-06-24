import { startConnection } from './database';
import app from './server';

app.listen(app.get('port'), async () => {
    await startConnection();
    console.log(`Serving at Port ${app.get('port')}!`);
});
