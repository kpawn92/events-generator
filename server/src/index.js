import { PORT, HOSTING, HOST_DOCS } from './config/env';
import { app } from './app';

app.listen(PORT);

console.log(`Server listening on host: ${HOSTING}\n`, `Documentation API-REST: ${HOST_DOCS}`);