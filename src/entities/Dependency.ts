import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum Types {
    task = "TASK",
    material = "MATERIAL",
    other = "OTHER"
}

@Entity()
export class Dependency {
    @PrimaryGeneratedColumn()
    dependencyId: string = "";
    @Column("text")
    description: string = "";
    @Column()
    parentTask: string = "";
    @Column()
    subTask: string = "";
    @Column("text")
    type: Types = Types.task
    //metadata: JSON maybe make this list of objects or something
}