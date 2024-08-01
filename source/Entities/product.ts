import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    prodId!:number;

    @Column()
    prodName!:string;
    
    @Column()
    supply!:number;
}

