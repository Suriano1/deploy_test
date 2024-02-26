import { mqttService } from '../services/MqttService';

class MqttController {
  public async handle(data: string) {
    const {
      mac,
      timercount,
      iin,
      i1,
      i2,
      vin,
      vout,
      st_red,
      st_yellow,
      st_green,
    } = JSON.parse(data);
    mqttService.execute(
      mac,
      timercount,
      iin,
      i1,
      i2,
      vin,
      vout,
      st_red,
      st_yellow,
      st_green,
    );
  }
}
export const mqttController = new MqttController();
