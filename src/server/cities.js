// functions/cities.js
import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('../data/cities.json'); // Replace 'path-to-your/cities.json' with the actual file path to the cities.json file
import middlewares from 'json-server.defaults';

server.use(middlewares);
server.use('/cities', router);

export default server;
