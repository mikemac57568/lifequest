import "reflect-metadata"
import { DataSource } from "typeorm";
import { Task } from "../entities/Task";
import { Dependency } from "../entities/Dependency";
import { Project } from "../entities/Project";
import { Material } from "../entities/Material";



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "postgres",
    entities: [Task, Dependency, Project, Material],
    synchronize: true,
    logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//     })
//     .catch((error) => console.log(error))