import { DeleteResult } from "typeorm";
import { Task } from "../entities/Task";
import { AppDataSource } from '../postgresql/db';

const taskRepository = AppDataSource.getRepository(Task)

export async function findAllTasks(): Promise<Task[]> {
    const tasks = await taskRepository.find();
    return tasks;
}

export async function findOneTask(taskId: string): Promise<Task> {
    const task = await taskRepository.findOne({
        where: {
            taskId: taskId
        }
    })
    if (task) {
        return task
    }
    return new Task();
}

export async function saveTask(task: Task): Promise<Task> {
    const savedTask = await taskRepository.save(task);
    if (task) {
        return task
    }
    return new Task();
}

//TODO do I need a post?
// export async function updateTask(task: Task): Promise<Task> {
//     const savedTask = await taskRepository.update(task);
//     if (task) {
//         return task
//     }
//     return new Task();
// }

export async function deleteOneTask(taskId: string): Promise<Boolean> {
    const deleteResult = await taskRepository.delete({ taskId: taskId })
    if (deleteResult) {
        return true
    }
    return false;
}