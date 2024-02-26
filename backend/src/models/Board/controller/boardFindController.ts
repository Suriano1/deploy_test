import { Request, Response } from 'express';
import { boardFindServices } from '../services/boardFindServices';

class BoardFindController {
  public async read(req: Request, res: Response) {
    const search = req.query.search ? String(req.query.search) : '';
    let page = Number(req.query.page);
    if (!page || page <= 0 || isNaN(page)) {
      page = 1;
    }
    try {
      const data = await boardFindServices.read(page, search);
      return res.json(data);
    } catch (err: any) {
      return res.status(404).json({
        error: err.message,
      });
    }
  }
}
export const boardFindController = new BoardFindController();
