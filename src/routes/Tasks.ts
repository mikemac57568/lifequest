import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';
import { findAllTasks, addTask, findOneTask } from '../dao/TasksDao';
import { mapRequestToTask } from '../entities/Mappers';
import { Any } from 'typeorm';

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
 *                       Add One - "POST /api/tasks/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
    console.log(req.body);
    const task = mapRequestToTask(req);
    console.log(task);
    
    if (!task) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "No task provided",
        });
    }
    await addTask(task) //how to check that add was successful?
    return res.status(StatusCodes.CREATED).end();
});


/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

// router.put('/update', async (req: Request, res: Response) => {
//     const { user } = req.body;
//     if (!user && !user.id) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     await getConnection()
//         .createQueryBuilder()
//         .update(User)
//         .set({ 
//             firstName: user.firstName, 
//             lastName: user.lastName,
//             age: user.age
//         })
//         .where("id = :id", { id: user.id })
//         .execute();
//     return res.status(OK).end();
// });


/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

// router.delete('/delete/:id', async (req: Request, res: Response) => {
//     const { id } = req.params as ParamsDictionary;
//     await getConnection()
//         .createQueryBuilder()
//         .delete()
//         .from(User)
//         .where("id = :id", { id: id })
//         .execute();
//     return res.status(OK).end();
// });


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;