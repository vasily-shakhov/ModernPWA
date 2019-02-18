import path from 'path';

process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config/');

import Koa from 'koa';
import cors from '@koa/cors';
import logger from 'koa-logger';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';

import * as https from 'https';
import * as http from 'http';
import SocketIO from 'socket.io';
import config from 'config';

const configJSON = require('../config.json');
const PORT = config.get('port');

const app = new Koa();
const router = new Router();
let server = null;

app.use(cors());
app.use(logger());
app.use(bodyParser());

app.use(passport.initialize());

const socketIONamespace = configJSON.service.path;

if (process.env.NODE_ENV === 'development') {
  server = https.createServer(config.get('httpsOptions'), app.callback());
} else {
  server = http.createServer(app.callback());
}

SocketIO(server, {
  origins: '*:*',
  path: '/ws',
}).of(socketIONamespace);

app.use(router.routes()).use(router.allowedMethods());

server.listen(PORT);
