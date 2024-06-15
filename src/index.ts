import express, { Application } from 'express';
import { EnvConfigurations } from './config/envConfig';
import bodyParser from 'body-parser';
import { connectToDB } from './config/dbConfig';
import { routes } from './routes';
import { setupMorgan } from './config/logger';

const app: Application = express();
const morganMiddleware = setupMorgan();
app.use(morganMiddleware('[:date[iso]] :remote-addr :method :url :status :response-time ms - :res[content-length]'));
app.use(bodyParser.json());

app.use('/api/v1', routes);
app.listen(EnvConfigurations.PORT, () => {
  connectToDB();
  console.log(`Server started at port ${EnvConfigurations.PORT}`);
});
