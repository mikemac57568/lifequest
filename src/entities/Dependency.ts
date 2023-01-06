import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
    //metadata: JSON maybe make this list of objects or something
}