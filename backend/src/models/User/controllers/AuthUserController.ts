import { Request, Response } from 'express';
import { authUserService } from '../services/AuthUserService';
import { z } from 'zod';
import { EZod } from '../../../enum/zod.enum';
import { EStatusErrors } from '../../../enum/status-erros.enum';
class AuthUserController {
  public async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const ZUserSchema = z.object({
        email: z.string().email({ message: `Email ${EZod.REQUIRED}` }),
        password: z.string().min(1, { message: `Senha ${EZod.REQUIRED}` }),
      });

      ZUserSchema.parse({ email, password });
    } catch (err: any) {
      return res.status(400).json({
        message: EStatusErrors.E400,
        error: err.errors,
      });
    }
    try {
      const auth = await authUserService.execute({ email, password });
      return res.json(auth);
    } catch (err: any) {
      switch (err.message) {
        case EStatusErrors.E401:
          return res.status(401).json({
            message: err.message,
          });
          break;

        case EStatusErrors.E404:
          return res.status(404).json({
            message: err.message,
          });
          break;
      }
    }
  }
}
export const authUserController = new AuthUserController();
