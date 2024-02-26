import { Request, Response } from 'express';
import { createUserService } from '../services/CreateUserService';
import { z } from 'zod';
import { ECrud } from '../../../enum/crud.enum';
import { EStatusErrors } from '../../../enum/status-erros.enum';
import { EZod } from '../../../enum/zod.enum';
class CreateUserController {
  public async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const ZUserSchema = z.object({
        name: z.string().optional(),
        email: z.string().email({ message: `Email ${EZod.REQUIRED}` }),
        password: z.string().min(8, { message: `Senha ${EZod.REQUIRED}` }),
      });
      ZUserSchema.parse({ name, email, password });
    } catch (err: any) {
      return res.status(400).json({
        message: EStatusErrors.E400,
        error: err.errors,
      });
    }

    try {
      return res.json({
        message: ECrud.CREATE,
        data: await createUserService.execute(name, email, password),
      });
    } catch (err: any) {
      return res.status(409).json({
        message: err.message,
      });
    }
  }
}
export const createUserController = new CreateUserController();
