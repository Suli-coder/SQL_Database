import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Carts } from "./cart";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    custId!:number;

    @Column("varchar",{length: 100})
    firstName!:string;
    
    @Column("varchar", {length: 100})
    lastName!:string;

    @OneToOne(() => Carts, cart => cart.cartId)
    cartId!: Carts;
}
