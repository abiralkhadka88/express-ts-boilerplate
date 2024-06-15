import { Router } from 'express';
import HealthController from './controller';

export const HEALTHROUTER = Router();

HEALTHROUTER.get('/', HealthController.appHealth);
