import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Task } from "../entities/Task";
import { AppDataSource } from '../postgresql/db';

// Init shared
const router = Router();

const taskRepository = AppDataSource.getRepository(Task)


/******************************************************************************
 *                      Get All Tasks - "GET /api/tasks/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const tasks = await taskRepository.find()
    return res.status(StatusCodes.OK).json({tasks});
});

/******************************************************************************
 *                      Get User - "GET /api/users/:id"
 ******************************************************************************/

// router.get('/:id', async (req: Request, res: Response) => {
//     const { id } = req.params as ParamsDictionary;
//     const user = await getConnection()
//         .createQueryBuilder()
//         .select("user")
//         .from(User, "user")
//         .where("user.id = :id", { id: id })
//         .getOne();
//     if (!user) {
//         res.status(404);
//         res.end();
//         return;
//     }
//     return res.status(OK).json({user});
// });


/******************************************************************************
 *                       Add One - "POST /api/tasks/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
    console.log(req.body)
    const task = new Task();
    task.name = req.body.name;
    task.description = req.body.description;
    console.log(task)
    
    if (!task) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "No task provided",
        });
    }
    await taskRepository.save(task)
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