import { EStatusErrors } from '../../../enum/status-erros.enum';
import { EZod } from '../../../enum/zod.enum';
import { Request, Response } from 'express';
import { z } from 'zod';
import { boardService } from '../services/boardService';
class BoardController {
  public async read(req: Request, res: Response) {
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
      const Data = await boardService.read(paramsId);
      return res.json(Data);
    } catch (err: any) {
      return res.status(404).json({
        error: err.message,
      });
    }
  }
}
export const boardController = new BoardController();
