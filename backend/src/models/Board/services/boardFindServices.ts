import { EStatusErrors } from '../../../enum/status-erros.enum';
import prismaConnect from '../../../prismaConnection';

class BoardFindServices {
  public async read(page: number, search: string | undefined) {
    const pageSize = 8;
    const skip = (page - 1) * pageSize;
    let findBoards;
    if (!search) {
      findBoards = await prismaConnect.mqttBoard.findMany({
        take: pageSize,
        skip,
      });
    } else {
      findBoards = await prismaConnect.mqttBoard.findMany({
        where: {
          mac: {
            contains: search,
            mode: 'insensitive',
          },
        },
        take: pageSize,
        skip,
      });
    }
    if (!findBoards) {
      throw new Error(EStatusErrors.E404);
    }
    const totalCount = await prismaConnect.mqttBoard.count({});
    const totalPages = Math.ceil(totalCount / pageSize);
    return {
      page,
      pageSize,
      totalCount,
      totalPages,
      Board: findBoards,
    };
  }
}
export const boardFindServices = new BoardFindServices();
