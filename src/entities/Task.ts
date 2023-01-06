import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    taskId: string = "";

    @Column({
        length: 100
    })
    name: string = "";

    @Column({type: "text",
            nullable: true
        })
    description: string = "";

    @Column({nullable: true})
    projectId: string = "";//may be more useful to have a name here with lookup?

    @Column({type: "timestamp",
            nullable: true
        })
    dueDate: string = "";

    @Column("text", { array: true, nullable: true })
    dependencies: string[] =[];

    @Column("text", { array: true, nullable: true })
    materials: string[] = [];

    //metadata: JSON maybe list of objects?
}