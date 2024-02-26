import prismaConnect from '../../../prismaConnection';

class MqttService {
  public async execute(
    mac: string,
    timercount: number,
    iin: number,
    i1: number,
    i2: number,
    vin: number,
    vout: number,
    st_red: boolean,
    st_yellow: boolean,
    st_green: boolean,
  ) {
    const findBoard = await prismaConnect.mqttBoard.findUnique({
      where: {
        mac,
      },
    });
    if (!findBoard) {
      const create = await prismaConnect.mqttBoard.create({
        data: {
          mac,
          timerdata: [
            new Date().toLocaleString('pt-Br', {
              dateStyle: 'short',
              timeStyle: 'short',
              timeZone: 'America/Sao_Paulo',
            }),
          ],
          iin: [iin],
          i1: [i1],
          i2: [i2],
          vin: [vin],
          vout: [vout],
          timercount: timercount,
          st_red,
          st_yellow,
          st_green,
        },
      });
      return console.log(create);
    } else {
      findBoard.timerdata.push(
        new Date().toLocaleString('pt-Br', {
          dateStyle: 'short',
          timeStyle: 'short',
          timeZone: 'America/Sao_Paulo',
        }),
      );
      findBoard.iin.push(iin);
      findBoard.i1.push(i1);
      findBoard.i2.push(i2);
      findBoard.vin.push(vin);
      findBoard.vout.push(vout);
      const update = await prismaConnect.mqttBoard.update({
        where: {
          mac,
        },
        data: {
          mac,
          timerdata: findBoard.timerdata,
          iin: findBoard.iin,
          i1: findBoard.i1,
          i2: findBoard.i2,
          vin: findBoard.vin,
          vout: findBoard.vout,
          timercount,
          st_red,
          st_yellow,
          st_green,
        },
      });
      return console.log(update);
    }
  }
}
export const mqttService = new MqttService();
