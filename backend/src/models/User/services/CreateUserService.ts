import { EStatusErrors } from '../../../enum/status-erros.enum';
import prismaConnect from '../../../prismaConnection';
import bcrypt from 'bcrypt';
class CreateUserService {
  public async execute(name: string, email: string, password: string) {
    const findUser = await prismaConnect.user.findFirst({
      where: {
        email,
      },
    });

    if (findUser) {
      throw new Error(EStatusErrors.E409);
    }
    const createUser = await prismaConnect.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, 8),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return createUser;
  }
}
export const createUserService = new CreateUserService();
