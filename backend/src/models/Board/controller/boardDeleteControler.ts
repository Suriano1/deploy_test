import { EStatusErrors } from '../../../enum/status-erros.enum';
import { EZod } from '../../../enum/zod.enum';
import { z } from 'zod';
import { Request, Response } from 'express';
import { ECrud } from '../../../enum/crud.enum';
import { boardDeleteService } from '../services/boardDeleteService';
class BoardDeleteController {
  public async delete(req: Request, res: Response) {
    const paramsId = req.params.id;

    try {
      const ZUserSchema = z
        .string()
        .min(10, { message: `ID ${EZod.REQUIRED}` });
      ZUserSchema.parse(paramsId);
    } catch (err: any) {
      return res.status(400).json({
        message: EStatusErrors.E400,
        error: err.errors,
      });
    }

    try {
      await boardDeleteService.delete(paramsId);

      return res.json({
        message: ECrud.DELETE,
      });
    } catch (err: any) {
      return res.status(404).json({
        error: err.message,
      });
    }
  }
}
export const boardDeleteController = new BoardDeleteController();
