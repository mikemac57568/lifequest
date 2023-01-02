import { Task } from "../entities/Task";
import { Request, Response, Router } from 'express';


export function mapRequestToTask(req: Request) {
    const task = new Task();
    task.name = req.body.name;
    task.description = req.body.description;
    task.dependencies = req.body.dependencies;
    task.dueDate = req.body.dueDate;
    task.materials = req.body.materials;
    task.projectId = req.body.projectId;
    return task;
}
