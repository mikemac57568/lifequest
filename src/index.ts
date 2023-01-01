//import app from './Server';
import logger from './shared/Logger'
import cookieParser from 'cookie-parser';
import express from 'express';
//import { StatusCodes } from 'http-status-codes';
import BaseRouter from './routes';
//import logger from './shared/Logger'
import morgan from 'morgan'
import { AppDataSource } from './postgresql/db';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
// Add APIs
app.use('/api', BaseRouter);
app.use(morgan('dev'));

AppDataSource.initialize();

// Export express instance
export default app;

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
   logger.info('Express server started on port: ' + port);
});