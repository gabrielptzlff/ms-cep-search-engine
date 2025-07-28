import 'reflect-metadata';
import { Container } from 'typedi';
import { useContainer } from 'routing-controllers';
import http from 'http';
import { route } from './routes/viaCepRoutes';

useContainer(Container);

const server = http.createServer((req, res) => {
  route(req, res);
});

server.listen(3003, () => {
  console.log('Server is running on http://localhost:3003');
});
