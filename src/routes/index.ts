import { Router } from 'express';
import { HEALTHROUTER } from './health';

export const routes = Router();

routes.use('/health', HEALTHROUTER);
