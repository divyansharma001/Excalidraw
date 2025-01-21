//this is a web-socket server that listens on port 8080 and sends a message back to the client when it receives a message from the client
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', function connection(ws) {

  ws.on('message', function message(data) {
    ws.send('ping');
  });

});