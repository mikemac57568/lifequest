import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Material {
    @PrimaryGeneratedColumn()
    materialId: string
    @Column({
        length: 100
    })
    name: string
    @Column("text")
    description: string
    @Column()
    source: string
    @Column()
    quantity: number
    //metadata: JSON maybe list of objects?
}