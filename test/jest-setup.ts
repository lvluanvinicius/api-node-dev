import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init(); // Inicializando server.

  global.testRequest = supertest(server.getApp());
});
