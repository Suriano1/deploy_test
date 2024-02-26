import moment from 'moment';
import prismaConnect from '../prismaConnection';

interface boardProps {
  mac: string;
  id: string;
  iin: number[];
  i1: number[];
  i2: number[];
  vin: number[];
  timerdata: string[];
  timercount: number;
  vout: number[];
  st_red: boolean;
  st_green: boolean;
  st_yellow: boolean;
  createdAt: Date;
}

export const DataBoard = async (props: boardProps) => {
  const mac = props.mac;
  const st_red = props.st_red;
  const st_yellow = props.st_yellow;
  const st_green = props.st_green;
  const timerCount = props.timercount;
  const now = new Date().toLocaleString('pt-Br', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }) as any;
  const timer = await props?.timerdata;
  // variaveis que irão armazenar valores para 5 minutos
  let Minuts30: any = [];
  let iinMinuts30: any = [];
  let i1Minuts30: any = [];
  let i2Minuts30: any = [];
  let vinMinuts30: any = [];
  let voutMinuts30: any = [];
  // variaveis que irão armazenar valores para 1 hora
  let oneHour: any = [];
  let iinoneHour: any = [];
  let i1oneHour: any = [];
  let i2oneHour: any = [];
  let vinoneHour: any = [];
  let voutoneHour: any = [];
  // variaveis que irão armazenar valores para 12 horas
  let twelveHours: any = [];
  let iintwelveHours: any = [];
  let i1twelveHours: any = [];
  let i2twelveHours: any = [];
  let vintwelveHours: any = [];
  let vouttwelveHours: any = [];
  // variaveis que irão armazenar valores para 24 horas
  let Hours24: any = [];
  let iinHours24: any = [];
  let i1Hours24: any = [];
  let i2Hours24: any = [];
  let vinHours24: any = [];
  let voutHours24: any = [];
  // variaveis que irão armazenar valores para 7 dias
  let Days7: any = [];
  let iinDays7: any = [];
  let i1Days7: any = [];
  let i2Days7: any = [];
  let vinDays7: any = [];
  let voutDays7: any = [];
  // variaveis que irão armazenar valores para 30 dias
  let Days30: any = [];
  let iinDays30: any = [];
  let i1Days30: any = [];
  let i2Days30: any = [];
  let vinDays30: any = [];
  let voutDays30: any = [];

  let timeTotal: any = [];
  let iinTotal: any = [];
  let i1Total: any = [];
  let i2Total: any = [];
  let vinTotal: any = [];
  let voutTotal: any = [];
  timeTotal = props.timerdata;
  i1Total = props.i1;
  iinTotal = props.iin;
  i2Total = props.i2;
  vinTotal = props.vin;
  voutTotal = props.vout;

  // variaveis que irão armazenar valores após remoção
  let NewDays: any = [];
  let iinNewDays: any = [];
  let i1NewDays: any = [];
  let i2NewDays: any = [];
  let vinNewDays: any = [];
  let voutNewDays: any = [];
  let flag30dias: any = false;
  timer?.map(async (e, i) => {
    const dif = moment(now, 'DD/MM/YYYY HH:mm:ss').diff(
      moment(e, 'DD/MM/YYYY HH:mm:ss'),
    );

    const difMins = moment.duration(dif).asMinutes();

    const difHour = moment.duration(dif).asHours();

    const difDay = moment.duration(dif).asDays();
    if (difMins <= 30) {
      Minuts30.push(e);
      iinMinuts30.push(props.iin[i]);
      i1Minuts30.push(props.i1[i]);
      i2Minuts30.push(props.i2[i]);
      vinMinuts30.push(props.vin[i]);
      voutMinuts30.push(props.vout[i]);
    }
    if (difHour <= 1) {
      oneHour.push(e);
      iinoneHour.push(props.iin[i]);
      i1oneHour.push(props.i1[i]);
      i2oneHour.push(props.i2[i]);
      vinoneHour.push(props.vin[i]);
      voutoneHour.push(props.vout[i]);
    }
    if (difHour <= 12) {
      twelveHours.push(e);
      iintwelveHours.push(props.iin[i]);
      i1twelveHours.push(props.i1[i]);
      i2twelveHours.push(props.i2[i]);
      vintwelveHours.push(props.vin[i]);
      vouttwelveHours.push(props.vout[i]);
    }
    if (difHour <= 24) {
      Hours24.push(e);
      iinHours24.push(props.iin[i]);
      i1Hours24.push(props.i1[i]);
      i2Hours24.push(props.i2[i]);
      vinHours24.push(props.vin[i]);
      voutHours24.push(props.vout[i]);
    }
    if (difDay <= 7) {
      Days7.push(e);
      iinDays7.push(props.iin[i]);
      i1Days7.push(props.i1[i]);
      i2Days7.push(props.i2[i]);
      vinDays7.push(props.vin[i]);
      voutDays7.push(props.vout[i]);
    }
    if (difDay <= 30) {
      Days30.push(e);
      iinDays30.push(props.iin[i]);
      i1Days30.push(props.i1[i]);
      i2Days30.push(props.i2[i]);
      vinDays30.push(props.vin[i]);
      voutDays30.push(props.vout[i]);
    }
    if (difDay >= 31) {
      flag30dias = true;
      NewDays = props.timerdata.slice(i, props.timerdata.length);
      iinNewDays = props.iin.slice(i, props.iin.length);
      i1NewDays = props.i1.slice(i, props.i1.length);
      i2NewDays = props.i2.slice(i, props.i2.length);
      vinNewDays = props.vin.slice(i, props.vin.length);
      voutNewDays = props.vout.slice(i, props.vout.length);
    }
  });
  if (flag30dias) {
    const update = await prismaConnect.mqttBoard.update({
      where: {
        mac,
      },
      data: {
        mac,
        timerdata: NewDays,
        iin: iinNewDays,
        i1: i1NewDays,
        i2: i2NewDays,
        vin: vinNewDays,
        vout: voutNewDays,
        timercount: timerCount,
        st_red: st_red,
        st_yellow: st_yellow,
        st_green: st_green,
      },
    });
    flag30dias = false;
  }

  return [
    {
      Minuts30,
      iinMinuts30,
      i1Minuts30,
      i2Minuts30,
      vinMinuts30,
      voutMinuts30,
    },
    { oneHour, iinoneHour, i1oneHour, i2oneHour, vinoneHour, voutoneHour },
    {
      twelveHours,
      iintwelveHours,
      i1twelveHours,
      i2twelveHours,
      vintwelveHours,
      vouttwelveHours,
    },
    {
      Hours24,
      iinHours24,
      i1Hours24,
      i2Hours24,
      vinHours24,
      voutHours24,
    },
    {
      Days7,
      iinDays7,
      i1Days7,
      i2Days7,
      vinDays7,
      voutDays7,
    },
    {
      Days30,
      iinDays30,
      i1Days30,
      i2Days30,
      vinDays30,
      voutDays30,
    },
    {
      timeTotal,
      iinTotal,
      i1Total,
      i2Total,
      vinTotal,
      voutTotal,
      timerCount,
    },
    {
      mac,
      st_green,
      st_yellow,
      st_red,
    },
  ];
};
