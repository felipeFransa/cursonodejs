import express, {Request, Response} from 'express';
import mainRoutes from './routes'

const server = express();

server.use(mainRoutes);

server.listen(80);