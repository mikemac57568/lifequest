import { Router } from 'express';
import TaskRouter from './Tasks';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/tasks', TaskRouter);

// Export the base-router
export default router;