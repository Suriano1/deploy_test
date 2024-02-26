import { EStatusErrors } from '../../../enum/status-erros.enum';
import prismaConnect from '../../../prismaConnection';
class BoardDeleteService {
  public async delete(paramsId: string) {
    const findBoard = await prismaConnect.mqttBoard.findFirst({
      where: {
        id: paramsId,
      },
    });
    if (!findBoard) {
      throw new Error(EStatusErrors.E404);
    }
    const deleteBoard = await prismaConnect.mqttBoard.delete({
      where: { id: paramsId },
    });
    return deleteBoard;
  }
}

export const boardDeleteService = new BoardDeleteService();
