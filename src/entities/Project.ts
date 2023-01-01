import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    projectId: string
    @Column({
        length: 100
    })
    name: string
    @Column("text")
    description: string
    @Column("text", { array: true })
    subTasks: string[]
    //metadata: JSON maybe list of objects?
}