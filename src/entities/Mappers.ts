import { Task } from "../entities/Task";
import { Request, Response, Router } from 'express';


export function mapRequestToTask(req: Request) {
    //TODO validate required fields provided, if not throw exception
    const task = new Task();
    task.taskId = req.body.taskId;
    task.name = req.body.name;
    task.description = req.body.description;
    task.dependencies = req.body.dependencies;
    task.dueDate = req.body.dueDate;
    task.projectId = req.body.projectId;
    return task;
}
