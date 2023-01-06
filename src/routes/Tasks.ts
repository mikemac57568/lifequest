import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';
import { findAllTasks, findOneTask, deleteOneTask, saveTask } from '../dao/TasksDao';
import { mapRequestToTask } from '../entities/Mappers';

// Init shared
const router = Router();


/******************************************************************************
 *                      Get All Tasks - "GET /api/tasks/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {   
    findAllTasks().then(tasks => {
        return res.status(StatusCodes.OK).json(tasks);
    })
});


/******************************************************************************
 *                      Get User - "GET /api/tasks/:taskId"
 ******************************************************************************/
router.get('/:taskId', async (req: Request, res: Response) => {
    const { taskId } = req.params as ParamsDictionary
    findOneTask(taskId).then(task => {
        return res.status(StatusCodes.OK).json(task);
    })
});


/******************************************************************************
 *                       Add Or Replace One - "PUT /api/tasks/save"
 ******************************************************************************/
router.put('/save', async (req: Request, res: Response) => {
    const task = mapRequestToTask(req);    
    if (!task) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "No task provided",
        });
    }
    saveTask(task).then(task => {
        return res.status(task ? StatusCodes.CREATED : StatusCodes.IM_A_TEAPOT).json(task);
    })
});


/******************************************************************************
 *                    Delete - "DELETE /api/tasks/delete/:id"
 ******************************************************************************/

router.delete('/delete/:taskId', async (req: Request, res: Response) => {
    const { taskId } = req.params as ParamsDictionary
    deleteOneTask(taskId).then(result => {
        return res.status(result ? StatusCodes.OK : StatusCodes.IM_A_TEAPOT).end();
    })
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;