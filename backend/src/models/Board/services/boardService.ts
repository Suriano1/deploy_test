import { DataBoard } from '../../../lib/DataBoard';
import { EStatusErrors } from '../../../enum/status-erros.enum';
import prismaConnect from '../../../prismaConnection';

class BoardService {
  public async read(paramsId: string) {
    const findUserClient = await prismaConnect.mqttBoard.findFirst({
      where: {
        id: paramsId,
      },
    });
    if (!findUserClient) {
      throw new Error(EStatusErrors.E404);
    }
    const data = DataBoard(findUserClient);
    return data;
  }
}
export const boardService = new BoardService();
