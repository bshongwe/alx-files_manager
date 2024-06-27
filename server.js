import express from 'express';
import injectRoutes from './routes';
import startServer from './libs/boot';
import injectMiddlewares from './libs/middlewares';

const server = express();
// const port = process.env.PORT || 5000;

// server.use('/', api);
// app.use(express.json());
injectMiddlewares(server);
injectRoutes(server);
startServer(server);

// server.listen(port, () => {
//	console.log(`Server is running on port ${port}`);
// });

export default server;
