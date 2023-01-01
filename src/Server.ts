// import cookieParser from 'cookie-parser';
// import express from 'express';
// //import { StatusCodes } from 'http-status-codes';
// import BaseRouter from './routes';
// //import logger from './shared/Logger'
// import morgan from 'morgan'
// import { AppDataSource } from './postgresql/db';

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());
// // Add APIs
// app.use('/api', BaseRouter);
// app.use(morgan('dev'));

// AppDataSource.initialize();

// // Export express instance
// export default app;

/// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// catches all unhandled exceptions
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     logger.error(err.message, err);
//     return res.status(StatusCodes.BAD_REQUEST).json({
//         error: err.message,
//     });
//  });