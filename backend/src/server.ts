import express from 'express';
import 'express-async-errors';
import { rateLimit } from 'express-rate-limit';
import { router } from './routes';
import cors from 'cors';
import { mqttController } from './models/Mqtt/controller/MqttController';

const app = express();
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 100, // Limit each IP to 100 request per `window` (here, per 1 hour).
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    code: 429,
    message: 'Too many requests',
  },
});
app.use(limiter);
app.use(express.json());
app.use(cors());

app.use(router);
const mqtt = require('mqtt');

const host = '15.228.78.183';
const port = '1883';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
});
const topic =
  '2d0c19d00226f3c3a47d3b46ccfe8cf76a720bf29593478ddfb3e6293f0746e1';

client.on('connect', () => {
  console.log('Connected');

  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

client.on('message', (topic: any, payload: any) => {
  console.log('Received Message:', topic);
  mqttController.handle(payload.toString());
});
app.listen(3333, () => console.log('Servidor online'));
