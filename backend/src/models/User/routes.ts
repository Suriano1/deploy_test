import { Router } from 'express';
import { createUserController } from './controllers/CreateUserController';
import { authUserController } from './controllers/AuthUserController';
const router: Router = Router();
const baseUrl = '/user';

router.post(`${baseUrl}`, createUserController.handle);
router.post(`${baseUrl}/login`, authUserController.handle);

export const userRouter = router;
