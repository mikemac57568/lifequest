import { DeleteResult } from "typeorm";
import { Task } from "../entities/Task";
import { AppDataSource } from '../postgresql/db';

const taskRepository = AppDataSource.getRepository(Task)

export async function findAllTasks(): Promise<Task[]> {
    const tasks: Task[] = await taskRepository.find();
    return tasks;
}

export async function findOneTask(taskId: string): Promise<Task> {
    const task: Task | null = await taskRepository.findOne({
        where: {
            taskId: taskId
        }
    })
    return task ? task : new Task();
}

export async function saveTask(task: Task): Promise<Task> {
    const savedTask: Task | null = await taskRepository.save(task);
    return savedTask ? savedTask : new Task();
}

export async function deleteOneTask(taskId: string): Promise<Boolean> {
    const deleteResult: any = await taskRepository.delete({ taskId: taskId })
    if (deleteResult) {
        return true
    }
    return false;
}