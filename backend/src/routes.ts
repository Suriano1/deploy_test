import { userRouter } from './models/User/routes';
import { mqttRouter } from './models/Board/routes';
export const router = [mqttRouter, userRouter];
