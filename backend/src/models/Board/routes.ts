import { Router } from 'express';
import { boardController } from './controller/boardController';
import { boardFindController } from './controller/boardFindController';
import { boardDeleteController } from './controller/boardDeleteControler';
const router: Router = Router();
const baseUrl = '/board';
export const mqttRouter = router;

router.get(`${baseUrl}/:id`, boardController.read);
router.get(`/boardList/`, boardFindController.read);
router.delete(`${baseUrl}/:id`, boardDeleteController.delete);
