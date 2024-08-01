import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    custId!:number;

    @Column("varchar",{length: 100})
    firstName!:string;
    
    @Column("varchar", {length: 100})
    lastName!:string;
}
