import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    custId!:number;
    @Column()
    firstName!:string;
    @Column()
    lastName!:string;
}
