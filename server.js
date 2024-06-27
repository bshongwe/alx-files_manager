import express from 'express';
import injectRoutes from './routes';

const server = express();
// const port = process.env.PORT || 5000;

// server.use('/', router);
injectMiddlewares(server);
injectRoutes(server);

// server.listen(port, () => {
//	console.log(`Server is running on port ${port}`);
// });

export default server;
