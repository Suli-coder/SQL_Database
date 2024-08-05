import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Carts } from "./cart";


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    prodId!:number;

    @Column("varchar",{length:100})
    prodName!:string;

    @ManyToOne(() => Carts, cart => cart.products)
    cart!: Carts;
}

