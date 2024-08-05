import { Entity, PrimaryColumn, OneToMany, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {Product} from "./product";
import { Customer } from "./customer";

@Entity()
export class Carts{
    @PrimaryGeneratedColumn()
    cartId!:number;
    
    //many products can be in one cart; so one to mnay, cart to products
    @OneToMany(() => Product, product => product.cart)
    products!: Product[];

    @OneToOne(() => Customer, customer => customer.custId)
    @JoinColumn({name: 'custId'})
    customer!: Customer;
    
}

