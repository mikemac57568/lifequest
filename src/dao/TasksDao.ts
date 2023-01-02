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
    return task;
}

export async function addTask(task: Task) {
    await taskRepository.save(task);
}