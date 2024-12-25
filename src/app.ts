import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middleweres/notFound';
import globalErrorHandler from './app/middleweres/globalErrorHandler';

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
