import { EStatusErrors } from '../../../enum/status-erros.enum';
import prismaConnect from '../../../prismaConnection';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
interface IAuthRequest {
  email: string;
  password: string;
}
class AuthUserService {
  public async execute({ email, password }: IAuthRequest) {
    const findUser = await prismaConnect.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });
    if (!findUser) {
      throw new Error(EStatusErrors.E404);
    }

    if (!bcrypt.compareSync(password, findUser.password)) {
      throw new Error(EStatusErrors.E401);
    }

    return {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };
  }
}
export const authUserService = new AuthUserService();
