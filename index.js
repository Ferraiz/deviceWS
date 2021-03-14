const WebSocket = require('ws');

const baseUrl = process.env.BASE_WS_URL || 'ws://localhost:3200/';
const deviceId = process.env.DEVICE_ID || 'wABCD';
const ws = new WebSocket(baseUrl + deviceId);

ws.on('open', function open() {
  console.log(`[${deviceId}] Conected to the server`);
});

ws.on('message', function message(message) {
  console.log(`[${deviceId}] Message recived: `, message);
});

ws.on('error', function error(err) {
  console.error(`[${deviceId}] Websocket error: `, err);
});

ws.on('close', function close() {
  console.log(`[${deviceId}] Close connection`);
});